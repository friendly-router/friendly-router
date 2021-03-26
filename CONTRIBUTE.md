# Contribute

 - [ ] define the convention used for a manufacturer name
 - [ ] define the convention used for a device name
 - [ ] define the different used templates
 - [ ] write __simple__ procedures

## Fork Friendly Router repository

TODO

## Create new Manufacturer

This database is pretty easy to use. The first level is set with the
name or identifier of the `manufacturer`. For example, if you need to
create a new manufacturer, using an UNIX systems, and assuming you are
in the root level of the friendly-router repository (previously
cloned).

Firstly, create a directory based on the name of the manufacturer,
here represented with `${manufacturer}` variables. Its name should
only use lower letters (`[a-z]+`) and dashes (`-`).

```sh
mkdir -p docs/database/${manufacturer}
```

This is a Vuepress static website, default page (usually `index.html`)
is mapped on `README.md` file. This file will contain all the
information about the manufacturer.

```sh
touch docs/database/${manufacturer}/README.md
```

Here a template of the newly created manufacturer:

```
---
title: Here the manufacturer name or id
sidebar: auto
license: ISC License
authors:
  - name of the author
tags: [manufacturer]
---

## Products

 * [internal link to product](product)

## Resources and References

 * [link](http://link)

```

## Create Hardware/Device

 * official links
 * official documentation
 * official contacts
 * community documentation
 * list of sellers
 * cost
 * test page
 * benchmark page
 * list of users

```sh
mkdir -p touch docs/database/${manufacturer}/${device}
touch docs/database/${manufacturer}/${device}/README.md
touch docs/database/${manufacturer}/${device}/test.md
touch docs/database/${manufacturer}/${device}/benchmark.md
```

## Create a Pull Request

## Thanks!

We can sometimes forget to update these following pages, don't
hesitate to alert us.

 * `/humans.txt` file
 * `/docs/thanks.md`
