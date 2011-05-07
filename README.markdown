# Augment.js

Augment.js is a library that brings JavaScript 1.8.5 to any browser.  It does this by augmenting built in types like `Array` and `Object`.

It combines the code snippets supplied by [Mozilla](https://developer.mozilla.org/en/JavaScript) for implementing methods using the exact algorithms specified in ECMA specifications.

Augment will never overwrite existing implementations, instead it will only add those methods that are missing.

## Usage

Include the minified source in your page before any JavaScript in which you wish to use modern JavaScript methods.

## Added Methods

* [Array.prototype.every](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every) - Tests whether all elements in the array pass the test implemented by the provided function.

* [Array.prototype.filter](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/filter) - Creates a new array with all elements that pass the test implemented by the provided function.

* [Array.prototype.forEach](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach) - Executes a provided function once per array element.

* [Array.prototype.indexOf](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf) - Returns the first index at which a given element can be found in the array, or -1 if it is not present.

* [Array.isArray](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray) - Returns true if a variable is an array, false if it is not.

* [Array.prototype.lastIndexOf](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf) - Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

* [Array.prototype.map](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/map) - Creates a new array with the results of calling a provided function on every element in this array.

* [Array.prototype.reduce](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reduce) - Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.

* [Array.prototype.reduceRight](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reduceRight) - Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.

* [Array.prototype.some](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some) - Tests whether some element in the array passes the test implemented by the provided function.

* [Function.prototype.bind](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind) - Creates a new function that, when called, itself calls this function in the context of the provided this value, with a given sequence of arguments preceding any provided when the new function was called.

* [Object.keys](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys) - Returns an array of all own enumerable properties found upon a given object, in the same order as that provided by a for-in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).

* String.prototype.trim - Trims whitespace from the beginning and end of the string

## Credits

Thanks to Mozilla for doing most of the hard work by sharing pure JavaScript implementations for these methods on their website.