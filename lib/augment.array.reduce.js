if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(fn, initialValue) {

    if (this === void 0 || this === null || typeof fn !== "function") throw new TypeError

    var t = Object(this),
        len = t.length >>> 0,
        hasInitialValue =  (initialValue !== void 0 && initialValue !== null)

    // no value to return if no initial value and an empty array
    if (len == 0 && !hasInitialValue) throw new TypeError

    var k = 0, accumulator

    if (hasInitialValue) {
      accumulator = initialValue
    } else {
      do {
        if (k in t) {
          accumulator = t[k++]
          break
        }

        // if array contains no values, no initial value to return
        if (++k >= len) throw new TypeError
      }
      while (true)
    }

    while (k < len) {
      if (k in t) accumulator = fn(accumulator, t[k], k, t)
      k++
    }

    return accumulator
  }
}
