module("map")

test("iterating over an array", function () {
  var a = [1,2,3],
      b = [],
      count = 0

  a.map(function (item) {
    count++
    b.push(item)
  })

  same(a, b, "should have iterated over the items in the array")
  equal(count, a.length, "should have yeilded to the function for every item in the array")
})

test("iterating over an empty array", function () {
  var a = [],
      count = 0

  a.map(function (item) {
    count++
  })

  equal(count, a.length, "shouldn't yield to the function at all since the array was empty")
})

test("arguments passed to the function", function () {
  var a = ["foo"],
      b, element, index

  a.map(function (e, i, array) {
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

  a.map(function () {
    self = this
  }, context)

  same(self, context, "should be able to set the context of the function")
})

test("returning a new array with the result of the function", function () {
  var a = [1,2,3],
      output

  output = a.map(function (item) {
    return item * 2
  })

  same([2,4,6], output, "should create a new array with each element the result of the function passed to map")
  same([1,2,3], a, "should not mutate the original array")
})

test("skipping non existent indexes", function () {
  var a = [,,,,,,,,], count = 0
  a.map(function () { count++ })

  equal(0, count, 'should skip non existent indexes')
})
