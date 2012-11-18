// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
if (!Array.prototype.some) {
  Array.prototype.some = function(fn, ctx) {

    if (this === void 0 || this === null || typeof fn !== "function") throw new TypeError

    var t = Object(this),
        len = t.length >>> 0,
        noCtx = (ctx === void 0 || ctx === null)

    for (var i = 0; i < len; i++) {
      if (i in t) {
        if (noCtx) {
          if (fn(t[i], i, t)) return true
        } else {
          if (fn.call(ctx, t[i], i, t)) return true
        }
      }
    }

    return false;
  };
}
