const returnFirstTwoDrivers = function (driver) {
  return driver.slice(0,2)
}

const returnLastTwoDrivers = function (driver) {
  return driver.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
  return function (fare) {return multiplier * fare}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, fn) {
  return fn(drivers)
}