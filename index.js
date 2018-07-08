// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  const newArray = []
  newArray.push(drivers[0], drivers[1])
  return newArray
}

const returnLastTwoDrivers = function(drivers) {
  const newArray = []
  newArray.push(drivers[drivers.length - 2],
drivers[drivers.length - 1])
  return newArray
}

const selectingDrivers = [
  returnFirstTwoDrivers, returnLastTwoDrivers
]

const createFareMultiplier = function(num1) {
  return function(num2) {
    return num1 * num2
  }
}

const fareDoubler = function(num) {
  return num * 2
}

const fareTripler = function(num) {
  return num * 3
}

const selectDifferentDrivers = function (arrayOfDrivers, funct) {
  return funct(arrayOfDrivers)
}
