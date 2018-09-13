// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  let newArray = []
  newArray.push(array[0])
  newArray.push(array[1])
  return newArray
}

const returnLastTwoDrivers = function (array) {
  let newArray = []
  let length = array.length
  newArray.push(array[length - 2])
  newArray.push(array[length - 1])
  return newArray
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

const createFareMultiplier = function (num) {
  return function (otherNum) {
    return num * otherNum
  }
}

const fareDoubler = function (fare) {
  return fare * 2
}

const fareTripler = function (fare) {
  return fare * 3
}

function fetchSpecifiedDrivers(arrayOfDrivers, fn) {
  return fn(arrayOfDrivers)
}
