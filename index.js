// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  const copy = []
  copy.push(drivers[0], drivers[1])
  return copy
}

const returnLastTwoDrivers = function (drivers) {
  const copy = []
  copy.push(drivers[drivers.length - 2], drivers[drivers.length - 1])
  return copy
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(mulitiplier) {
  return function (fare) {
    return fare * mulitiplier
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, cb) {
  return cb(drivers)
}
