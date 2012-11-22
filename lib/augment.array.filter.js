if (!Array.prototype.filter) {
  Array.prototype.filter = function(fn, ctx) {

    if (this === void 0 || this === null || typeof fn !== "function") throw new TypeError

    var t = Object(this),
        len = t.length >>> 0,
        noCtx = (ctx === void 0 || ctx === null),
        response = []

    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i] // in case fn mutates this
        if (noCtx) {
          if (fn(t[i], i, t)) response.push(val)
        } else {
          if (fn.call(ctx, t[i], i, t)) response.push(val)
        }
      }
    }

    return response
  }
}
