// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  const arr = []
  arr.push(drivers[0], drivers[1])
  return arr
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length -2, drivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return function(num2) {
    return num * num2
  }
}

function fareDoubler(number) {
  return number * 2
}

function fareTripler(number) {
  return number * 3
}

function selectDifferentDrivers(drivers, func) {
  return func(drivers)
}
