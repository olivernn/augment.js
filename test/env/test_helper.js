QUnit.clock = null

QUnit.moduleStart = function (module) {
  if (module.name === "toISOString") QUnit.clock = sinon.useFakeTimers()
}

QUnit.moduleEnd = function (module) {
  if (module.name === 'toISOString') QUnit.clock.restore()
}