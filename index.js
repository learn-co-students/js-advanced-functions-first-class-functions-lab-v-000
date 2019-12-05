// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
  return [arr[0], arr[1]]
}

function returnLastTwoDrivers(arr) {
  return [arr[arr.length-2], arr[arr.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  return function(a) { return int*a }
}

function fareDoubler(int) {
  return createFareMultiplier(int)(2)
}

function fareTripler(int) {
  return createFareMultiplier(int)(3)
}

function selectDifferentDrivers(drivers, driverFunction) {
  return driverFunction(drivers)
}
