// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  newDrivers = drivers.slice(0,2)
  return newDrivers
}

const returnLastTwoDrivers = function (drivers) {
  newDrivers = drivers.slice(drivers.length - 2)
  return newDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (integer) {
  return function (fare) {
    return fare * integer
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (arrayOfDrivers, func) {
  return func(arrayOfDrivers)
}
