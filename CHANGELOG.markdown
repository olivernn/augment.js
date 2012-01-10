# Changelog

## 0.4.1

* Fix [issue](https://github.com/olivernn/augment.js/pull/9) with Function.prototype.bind when being called on native functions in Safari.  Thanks [nciagra](https://github.com/nciagra).

## 0.4.0

* Add `Object.getPrototypeOf` method - closes [issue](https://github.com/olivernn/augment.js/issues/6)
* Change build system to remove dependencies on ruby
* Change build system to use uglify.js as the minimizer

## 0.3.1

* Fix [issue](https://github.com/olivernn/augment.js/issues/8) with Date.prototype.toISOString handling of years less than 0 and greater than 9999, reported by [Yaffle](https://github.com/Yaffle)

## 0.3.0

* Resolve [issue](https://github.com/olivernn/augment.js/pull/4) by renaming Date.prototype.toUTCString to Date.prototype.toISOString.  Thanks [wallin](https://github.com/wallin).

## 0.2.1

* Fix [issue](https://github.com/olivernn/augment.js/issues/1) with String.prototype.trim, reported by [tjelen](https://github.com/tjelen).

## 0.2.0

* Add Date.now, date.toJSON & date.toUTCString