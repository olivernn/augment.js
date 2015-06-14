if (!String.prototype.trim) {
  String.prototype.trim = (function () {

    var trim  = /^\s+|\s+$/g;

    return function () {
      return this.replace(trim, "");
    }
  })()
};
