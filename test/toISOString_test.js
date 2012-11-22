module("Date.prototype.toISOString")

// date has been stubbed with sinon
var stubbedDate = function (fullYear) {
  var d = new Date (0)

  d.setUTCFullYear(fullYear || 1970)
  d.setUTCMonth(0)
  d.setUTCDate(1)
  d.setUTCHours(0)
  d.setUTCMinutes(0)
  d.setUTCSeconds(0)
  d.setUTCMilliseconds(0)

  return d
}

test("converts a date to an ISO string", function () {
  var date = stubbedDate()

  equal('1970-01-01T00:00:00.000Z', date.toISOString(), "should return an ISO formatted string of the date")
})

test("handling months correctly", function () {
  var date = stubbedDate()

  date.setUTCMonth(1)
  equal('1970-02-01T00:00:00.000Z', date.toISOString(), "should take care of javascripts crazy months")
})

test("handling padding of milliseconds correctly", function () {
  var date = stubbedDate()

  date.setUTCMilliseconds(2)
  equal('1970-01-01T00:00:00.002Z', date.toISOString(), "should pad the milliseconds correctly")

  date.setUTCMilliseconds(999)
  equal('1970-01-01T00:00:00.999Z', date.toISOString(), "should pad the milliseconds correctly")
})

test("year is greater than 9999", function () {
  var date = stubbedDate(10000)
  equal('+010000-01-01T00:00:00.000Z', date.toISOString(), "should correctly handle dates with years greater than 9999")
})

test("year is less than 0", function () {
  var date = stubbedDate(-1)
  equal('-000001-01-01T00:00:00.000Z', date.toISOString(), "should correctly handle dates with years less than 9999")
})
