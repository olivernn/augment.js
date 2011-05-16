module("trim")

test("should remove white space from the begining & end of the string", function () {
  var a = "   foo   ",
      b = "   foo",
      c = "foo   "
  
  equal("foo", a.trim(), "should remove white spaces")
  equal("foo", b.trim(), "should remove white space")
  equal("foo", c.trim(), "should remove white space")
})

test("should not modify the string", function () {
  var a = "   foo   "
  a.trim()
  equal("   foo   ", a, "should not modify the string")
})

test("should not remove any whitespace from anywhere else in the string", function () {
  var str = "   Hello World!    "

  equal("Hello World!", str.trim(), "should not remove any whitespace inside the string")
})