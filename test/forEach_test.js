module("Array.prototype.forEach")

test("iterating over an array", function () {
  var a = [1,2,3],
      b = [],
      count = 0

  a.forEach(function (item) {
    count++
    b.push(item)
  })

  deepEqual(a, b, "should have iterated over the items in the array")
  equal(count, a.length, "should have yeilded to the function for every item in the array")
})

test("iterating over an empty array", function () {
  var a = [],
      count = 0

  a.forEach(function (item) {
    count++
  })

  equal(count, a.length, "shouldn't yield to the function at all since the array was empty")
})

test("arguments passed to the function", function () {
  var a = ["foo"],
      b, element, index

  a.forEach(function (e, i, array) {
    b = array
    element = e
    index = i
  })

  equal(element, "foo", "should yield the element of the array as the first argument")
  equal(index, 0, "should yield the index of the item in the array as the second argument")
  deepEqual(b, a, "should yeild the array being iterated as the third argument")
})

test("setting the context of the callback function", function () {
  var a = ["foo"],
      context = {},
      self

  a.forEach(function () {
    self = this
  }, context)

  deepEqual(self, context, "should be able to set the context of the function")
})

test("skipping non existent indexes", function () {
  var a = [,,,,,,,,], count = 0
  a.forEach(function () { count++ })

  equal(0, count, 'should skip non existent indexes')
})
