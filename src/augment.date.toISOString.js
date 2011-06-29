if (!Date.prototype.toISOString) {
  Date.prototype.toISOString = (function () {

    var pad = function (n, length) {
      length = length || 2
      return (n = n + "", n.length === length) ? n : pad("0" + n, length);
    }

    return function () {
      var year = [this.getUTCFullYear(), pad(this.getUTCMonth() + 1), pad(this.getUTCDate())].join("-")
      var time = [pad(this.getUTCHours()), pad(this.getUTCMinutes()), pad(this.getUTCSeconds())].join(":") + "." + pad(this.getUTCMilliseconds(), 3)
      return [year, time].join("T") + "Z"
    }
  })()
};