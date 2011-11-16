;(function () { "use strict"

  var ensureIsObject = function (param) {
    if (param !== Object(param)) throw new TypeError('Object.getPrototypeOf called on non-object');
  }

  if (!Object.getPrototypeOf) {
    if (typeof "test".__proto__ === "object") {
      Object.getPrototypeOf = function (obj) {
        ensureIsObject(obj)
        return obj.__proto__
      }
    } else {
      Object.getPrototypeOf = function (obj) {
        ensureIsObject(obj)
        return obj.constructor.prototype
      }
    };
  };
})();
