// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/map
if (!Array.prototype.map) {
  Array.prototype.map = function(fn, ctx) {

    if (this === void 0 || this === null || typeof fn !== "function") throw new TypeError

    var t = Object(this),
        len = t.length >>> 0,
        noCtx = (ctx === void 0 || ctx === null),
        response = new Array (len)

    for (var i = 0; i < len; i++) {
      if (i in t) {
        if (noCtx) {
          response[i] = fn(t[i], i, t)
        } else {
          response[i] = fn.call(ctx, t[i], i, t)
        }
      }
    }

    return response
  };
}
