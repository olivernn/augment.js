BOWER_COMPONENT = '{"name": "Augment.js", "version": "@VERSION", "main": "./augment.js"}'

VERSION = $(shell cat VERSION)

all: augment.js augment.min.js bower

augment.js:
	./builder > $@

augment.min.js:
	./builder -m > $@

size: augment.min.js
	gzip -c augment.min.js | wc -c

clean:
	rm -f augment{.min,}.js
	rm -f component.json

test:
	@node server 8003

bower:
	echo $(BOWER_COMPONENT) | sed "s/@VERSION/${VERSION}/" > component.json

.PHONY: test clean
