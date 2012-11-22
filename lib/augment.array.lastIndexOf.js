if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function(searchElement, fromIdx) {

    if (this === void 0 || this === null) throw new TypeError()

    var t = Object(this),
        len = t.length >>> 0,
        hasFromIdx = (fromIdx !== void 0 && fromIdx !== null)

    if (len === 0) return -1

    var n = len

    if (hasFromIdx) {
      n = Number(fromIdx)

      if (n !== n) {
        n = 0
      } else if (n !== 0 && n !== (Infinity) && n !== -(Infinity)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n))
      }
    }

    var k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n)

    for (; k >= 0; k--) {
      if (k in t && t[k] === searchElement) return k
    }

    return -1
  }
}
