if (!Date.prototype.toISOString) {
  Date.prototype.toISOString = (function () {

    var pad = function (n) {
      return (n = n + "", n.length === 2) ? n : "0" + n;
    }

    return function () {
      var year = [this.getUTCFullYear(), pad(this.getUTCMonth() + 1), pad(this.getUTCDate())].join("-")
      var time = [pad(this.getUTCHours()), pad(this.getUTCMinutes()), pad(this.getUTCSeconds())].join(":") + "." + this.getMilliseconds()
      return [year, time].join("T") + "Z"
    }
  })()
};