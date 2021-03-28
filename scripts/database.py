#!/usr/bin/env python
######################################################################
# Copyright (c) 2021 Mathieu Kerjouan
#
# Permission to use, copy, modify, and distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
# 
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL
# WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED
# WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE
# AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL
# DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR
# PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
# TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
# PERFORMANCE OF THIS SOFTWARE.
#
# This script was created to generate automatically different files
# to help people find information by themself. The idea is to have
# static HTML/Markdown files (at first) giving direct access to 
# manufacturers or a specific device.
#
# It was created in Python3 to be portable and executable on any
# modern systems.
######################################################################

import pathlib
import re

class Manufacturers:
  """ This is the main object create to have access to all 
      manufacturers present in 'path'.
  """

  path = ""
  elements = []
  
  def export(self):
    """ create these file:

        * _manufacturers.md
        * _devices.md
    """

  def __init__(self, path):
    self.path = path
    database = pathlib.Path(path)
    for file in sorted(database.iterdir()):
      manufacturer = Manufacturer(file)
      self.elements.append(manufacturer)
    print(len(self.elements))

class Manufacturer:
  """ A manufacturer is a directory containing a 'README.md' file and 
      many sub-directories or files representing a device.
  """

  name = ""
  path = ""
  devices = []
  __regex_name = '^([a-z0-9]+|-)+$'

  def __check(self, path):
    """ check the name of the manufacturer and if it's a directory.
    """
    correct_dir = path.is_dir()
    correct_name = re.match(self.__regex_name, path.name)
    return correct_dir and correct_name

  def __init__(self, path):
    if self.__check(path):
      self.path = path
      self.name = path.name
      print(self.path)

class Device:
  """ A device is the last element of the database. It can
      be a file or a directory containing 'README.md' file.
  """
  name = ""
  path =""

t = Manufacturers("docs/database")
