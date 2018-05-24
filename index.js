// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0, 2)
}

const returnLastTwoDrivers = function (arr) {
    return arr.slice(-2)
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

const createFareMultiplier = function (mul) {
  return function (num) {
    return num * mul
  }
}

function fareDoubler(num) {
  return num * 2
}

function fareTripler(num) {
  return num * 3
}

function selectDifferentDrivers(array, myFunc) {
  return myFunc(array)
}
