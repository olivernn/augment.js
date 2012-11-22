if (!Date.prototype.toJSON) {
  Date.prototype.toJSON = function () {
    var t = Object(this),
        toISO = t.toISOString

    if (typeof toISO !== 'function') throw new TypeError

    return toISO.call(t)
  }
};
