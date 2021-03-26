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

