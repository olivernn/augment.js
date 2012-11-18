// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/foreach
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(fn, ctx) {

    if (this === void 0 || this === null || typeof fn !== "function") throw new TypeError

    var t = Object(this),
        len = t.length >>> 0,
        noCtx = (ctx === void 0 || ctx === null)

    for (var i = 0; i < len; i++) {
      if (i in t) {
        if (noCtx) {
          fn(t[i], i, t)
        } else {
          fn.call(ctx, t[i], i, t)
        }
      }
    }
  }
}

