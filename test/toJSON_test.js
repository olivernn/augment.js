module("Date.prototype.toJSON")

test("using toISOString", function () {
  var d = new Date
  d.toISOString = function () { return 'date as json' }

  equal('date as json', d.toJSON())
})

if (window.JSON) {
  test("using toISOString when strigified", function () {
    var d = new Date
    d.toISOString = function () { return 'date as json' }

    equal(JSON.stringify(d.toISOString()), JSON.stringify(d))
  })
}
