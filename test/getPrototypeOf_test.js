module("getPrototypeOf")

test("returns the prototype of an object", function () {
  var Foo = function () {}
  Foo.prototype = {
    bar: true
  }

  var foo = new Foo ()

  same(Object.getPrototypeOf(foo), Foo.prototype, "should return the prototype of an object")
  same(foo.constructor, Foo)
  same(foo.__proto__, Foo.prototype)
})

test("throws a TypeError if called on a non object", function () {
  raises(function () {
    Object.getPrototypeOf('foo')
  }, TypeError, "can only be called on an object")
})