######################################################################
# GNU Makefile
######################################################################

RSYNC_FLAG ?= -avr --delete-after --exclude CNAME --exclude .git

.PHONY += help
help:
	@echo "Usage: make [bootstrap|test|build|deploy]"

include *.mk

.PHONY += bootstrap
bootstrap:
	yarn

.PHONY += test
test: bootstrap
	yarn vuepress dev docs

.PHONY += build
build: bootstrap
	yarn vuepress build docs

.PHONY += deploy
deploy: build
ifdef TARGET 
	rsync $(RSYNC_FLAG) ./docs/.vuepress/dist/. $(TARGET)
else
	@echo TARGET variable not defined
endif

######################################################################
# database targets, use with care. this is actually in test and
# should be replaced by python or javascript script. please don't
# use it right now.
######################################################################
.PHONY += update-database
update-database: update-manufacturers

.PHONY += update-manufacturers
update-manufacturers: docs/database/_manufacturers.md

docs/database/_manufacturers.md::
	ls docs/database 			\
		| grep -v '.md$$' 		\
		| sed 's/.*/| [&](&) |/'	\
		| sed '1 i \
|----|\
'				\
		| sed '1 i \
|manufacturers|\
'		\
		> $(@)
