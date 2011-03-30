module("reduceRight")

test("reducing an array", function () {
  var a = [1,2,3],
      total

  total = a.reduce(function (a, b) {
    return a + b
  })

  equal(6, total, "should sum the array")
})

test("passing an initial value into the reduce", function () {
  var a = [1,2,3],
      total

  total = a.reduce(function (a, b) {
    return a + b
  }, 10)

  equal(16, total, "should sum the array")
})

test("arguments that are passed to the function", function () {
  var a = [1, 2],
      previousValue,
      currentValue,
      index,
      array

  a.reduce(function (b,c,d,e) {
    previousValue = b
    currentValue = c
    index = d
    array = e
  })

  equal(1, previousValue, "the previous value should be 0 initially and be the first argument to the function")
  equal(2, currentValue, "the current value should be 1 and be the second argument to the function")
  equal(1, index, "the index should be the third argument passed to the function")
  same(array, a, "the array being reduced should be passed as the fourth argument")
})

