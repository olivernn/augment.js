;(function () { "use strict"

  var ensureIsObject = function (param) {
    if (param !== Object(param)) throw new TypeError('Object.getPrototypeOf called on non-object');
  }
  
  if (true || !Object.getPrototypeOf) {
    if (typeof "test".__proto__ === "object") {
      Object.getPrototypeOf = function (obj) {
        ensureIsObject(obj)
        return obj.__proto__;
      };
    } else {
      Object.getPrototypeOf = function (obj) {
        ensureIsObject(obj)
        alert("bar")
        var constructor = obj.constructor,
        oldConstructor;
        if (Object.prototype.hasOwnProperty.call(obj, "constructor")) {
          oldConstructor = constructor;
          if (!(delete obj.constructor)) // reset constructor
            return null; // can't delete obj.constructor, return null
          constructor = obj.constructor; // get real constructor
          obj.constructor = oldConstructor; // restore constructor
        }
        return constructor ? constructor.prototype : null; // needed for IE
      };
    }
    

    // var ensureIsObject = function (param) {
    //   if (param !== Object(param)) throw new TypeError('Object.getPrototypeOf called on non-object');
    // }
    // 
    // if (typeof "test".__proto__ === "object") {
    //   Object.getPrototypeOf = function (obj) {
    //     ensureIsObject(obj)
    //     return obj.__proto__
    //   }
    // } else {
    //   Object.getPrototypeOf = function (obj) {
    //     ensureIsObject(obj)
    //     return obj.constructor.prototype
    //   }
    // }
  }
})();
