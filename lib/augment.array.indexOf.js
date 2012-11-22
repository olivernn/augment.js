if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIdx) {

    if (this === void 0 || this === null) throw new TypeError

    var t = Object(this),
        len = t.length >>> 0,
        hasFromIdx = (fromIdx !== void 0 && fromIdx !== null)

    if (len === 0) return -1

    var n = 0

    if (hasFromIdx) {
      n = Number(fromIdx)

      if (n !== n) { // shortcut for verifying if it is NaN
        n = 0
      } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n))
      }
    }

    if (n >= len) return -1

    var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0)

    for (; k < len; k++) {
      if (k in t && t[k] === searchElement) return k
    }
    return -1
  }
}
