// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
  return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr) {
  return arr.slice(Math.max(arr.length-2))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
  return function(num) {
    return num * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function(arr, drivers) {
  return drivers(arr)
}
