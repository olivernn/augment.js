QUnit.clock = null

if (QUnit.urlParams.nonative) {
  delete Array.prototype.every
  delete Array.prototype.filter
  delete Array.prototype.forEach
  delete Array.prototype.indexOf
  delete Array.isArray
  delete Array.prototype.lastIndexOf
  delete Array.prototype.map
  delete Array.prototype.reduce
  delete Array.prototype.reduceRight
  delete Array.prototype.some
  delete Date.now
  delete Date.prototype.toISOString
  delete Date.prototype.toJSON
  delete Function.prototype.bind
  delete Object.getPrototypeOf
  delete Object.keys
  delete String.prototype.trim
}

QUnit.moduleStart = function (module) {
  if (module.name === "Date.prototype.toISOString") QUnit.clock = sinon.useFakeTimers()
}

QUnit.moduleEnd = function (module) {
  if (module.name === "Date.prototype.toISOString") QUnit.clock.restore()
}

QUnit.config.urlConfig.push({
  id: 'nonative',
  label: 'No natives',
  tooltip: 'Wipe out native implementations and test shims only'
})

