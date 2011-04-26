module("bind")

test("changing the context of a function", function () {
  var x = 0
  var module = {
    x: 10,
    getX: function () {
      return this.x
    }
  }

  var fn = function () {
    return this.getX()
  }

  var boundFn = fn.bind(module)

  equal(10, boundFn(), "should return a function with context bound to the specified object")
})