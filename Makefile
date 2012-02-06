all: augment.js augment.min.js

augment.js:
	./builder > $@

augment.min.js:
	./builder -m > $@

size: augment.min.js
	gzip -c augment.min.js | wc -c

clean:
	rm -f augment{.min,}.js

test:
	@node server 8003

.PHONY: test clean