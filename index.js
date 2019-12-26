// Code your solution in this file!
let returnFirstTwoDrivers = function(driverArray) {
  return driverArray.slice(0,2)
}
let returnLastTwoDrivers = function(driverArray) {
  return driverArray.slice(driverArray.length - 2)
}
//const selectingDrivers = [...returnFirstTwoDrivers, ...returnLastTwoDrivers]

const selectingDrivers = [].concat(returnFirstTwoDrivers, returnLastTwoDrivers)

let createFareMultiplier = function(number) {
  return function(fare) {
    return fare * number
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = function(driverArray, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(driverArray)
}
