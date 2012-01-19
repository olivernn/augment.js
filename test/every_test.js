module("every")

test("where every element passes the test", function () {
  var a = [1,2,3]
  var result = a.every(function (element) {
    return element < 10
  })

  ok(result, "every element of the array is less than 10")
})

test("where one of the items doesn't pass the test", function () {
  var a = [1,2,3]
  var result = a.every(function (element) {
    return element < 2
  })

  ok(!result, "not every element of the array is less than 2")
})

test("should only call the callback whilst the test is passing", function () {
  var a = [1,2,3]
  var count = 0
  var result = a.every(function (element) {
    count++
    return element < 2
  })

  ok(!result, "not every element of the array is less than 2")
  equal(2, count, "should stop iterating as soon as the test is false")
})

test("arguments passed to the function", function () {
  var a = ["foo"],
      b, element, index

  a.every(function (e, i, array) {
    b = array
    element = e
    index = i
    return true
  })

  equal(element, "foo", "should yield the element of the array as the first argument")
  equal(index, 0, "should yield the index of the item in the array as the second argument")
  same(b, a, "should yeild the array being iterated as the third argument")
})

test("setting the context of the callback function", function () {
  var a = ["foo"],
      context = {},
      self

  a.every(function () {
    self = this
  }, context)

  same(self, context, "should be able to set the context of the function")
})
