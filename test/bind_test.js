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

test("safari has problems with using bind on native functions", function () {
  var slice = Function.prototype.call.bind(Array.prototype.slice), args

  var foo = function () {
    args = slice(arguments)
  }

  foo(1,2,3,4)
  same(args, [1,2,3,4])
})
