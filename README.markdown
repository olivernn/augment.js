# Augment.js

Augment.js is a library that brings JavaScript 1.8.5 to any browser.  It does this by augmenting built in types like `Array` and `Object`.

It combines the code snippets supplied by [Mozilla](https://developer.mozilla.org/en/JavaScript) for implementing methods using the exact algorithms specified in ECMA specifications.

Augment will never overwrite existing implementations, instead it will only add those methods that are missing.

## Usage

Include the minified source in your page before any JavaScript in which you wish to use modern JavaScript methods.