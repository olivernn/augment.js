// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/now
if (!Date.now) {
  Date.now = function now () {
    return +new Date();
  };
}
