if (!Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function(fn, initialValue) {

    if (this === void 0 || this === null || typeof fn !== "function") throw new TypeError

    var t = Object(this),
        len = t.length >>> 0,
        hasInitialValue = (initialValue !== void 0 && initialValue !== null)

    // no value to return if no initial value, empty array
    if (len == 0 && !hasInitialValue) throw new TypeError

    var k = len - 1, accumulator

    if (hasInitialValue) {
      accumulator = initialValue
    } else {
      do {
        if (k in this) {
          accumulator = t[k--]
          break
        }

        // if array contains no values, no initial value to return
        if (--k < 0) throw new TypeError
      }
      while (true)
    }

    while (k--) {
      if (k in t) accumulator = callbackfn(accumulator, t[k], k, t)
    }

    return accumulator
  };
}
