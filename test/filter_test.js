module("filter")

test("when the filter returns true", function () {
  var a = [1,2,3],
      result

  result = a.filter(function (element) {
    return true
  })

  same(a, result, "should only return elements of the array that the function returned true for")
})

test("whent he filter always returns false", function () {
  var a = [1,2,3],
      result

  result = a.filter(function (element) {
    return false
  })

  same([], result, "should only return elements of the array that the function returned true for")
})

test("when the function returns false sometimes", function () {
  var a = [1,2,3],
      result

  result = a.filter(function (element) {
    return (element !== 3)
  })

  same([1,2], result, "should only return elements of the array that the function returned true for")
})

test("arguments passed to the function", function () {
  var a = ["foo"],
      b, element, index

  a.filter(function (e, i, array) {
    b = array
    element = e
    index = i
  })

  equal(element, "foo", "should yield the element of the array as the first argument")
  equal(index, 0, "should yield the index of the item in the array as the second argument")
  same(b, a, "should yeild the array being iterated as the third argument")
})

test("setting the context of the callback function", function () {
  var a = ["foo"],
      context = {},
      self

  a.filter(function () {
    self = this
  }, context)

  same(self, context, "should be able to set the context of the function")
})

test("skipping non existent indexes", function () {
  var a = [,,,,,,,,], count = 0
  a.filter(function () { count++ })

  equal(0, count, 'should skip non existent indexes')
})
