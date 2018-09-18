// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  let firstTwoDrivers = []
  firstTwoDrivers.push(drivers[0], drivers[1])
  return firstTwoDrivers
}

const returnLastTwoDrivers = function(drivers) {
  let lastTwoDrivers = []
  lastTwoDrivers.push(drivers[drivers.length -2 ], drivers[drivers.length - 1])
  return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
  return function (num) {
    return multiplier * num
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(drivers, method) {
  return method(drivers)
}
