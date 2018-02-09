// Code your solution in this file!
// Statement: is a unit of code that accomplishes something but does not produce a value.
// Expression: is a unit of code that produces a value

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fareMultiplier) {
  return function (num) {
    return fareMultiplier * num
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, selectedDrivers) {
  return selectedDrivers(drivers)
}
