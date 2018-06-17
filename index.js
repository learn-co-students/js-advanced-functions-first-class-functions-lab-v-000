// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return function (fare) {
    return fare * num
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, functionName) {
  if (functionName === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
  } else if (functionName === returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers)
  }
}
