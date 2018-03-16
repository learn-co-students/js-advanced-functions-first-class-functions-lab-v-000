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

function createFareMultiplier(num) {
  return function () {
    return num * num
  }
}

function fareDoubler(num) {
  return num * 2
}

function fareTripler(num) {
  return num * 3
}

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers)
}
