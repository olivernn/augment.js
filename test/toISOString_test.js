module("toISOString")

// date has been stubbed with sinon
var stubbedDate = function () {
  return new Date ()
}

test("converts a date to an ISO string", function () {
  var date = stubbedDate()

  equal('1970-01-01T00:00:00.000Z', date.toISOString(), "should return an ISO formatted string of the date")
})

test("handling months correctly", function () {
  var date = stubbedDate()

  date.setMonth(1)
  equal('1970-02-01T00:00:00.000Z', date.toISOString(), "should take care of javascripts crazy months")
})

test("handling padding of milliseconds correctly", function () {
  var date = stubbedDate()

  date.setUTCMilliseconds(2)
  equal('1970-01-01T00:00:00.002Z', date.toISOString(), "should pad the milliseconds correctly")

  date.setUTCMilliseconds(999)
  equal('1970-01-01T00:00:00.999Z', date.toISOString(), "should pad the milliseconds correctly")
})