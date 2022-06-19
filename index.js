// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  return array.slice(0,2)
}

const returnLastTwoDrivers = function(array) {
  return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(mult) {
  return function(fare) { return fare * mult }
}

const [fareDoubler, fareTripler] = [createFareMultiplier(2), createFareMultiplier(3)]

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers)
}