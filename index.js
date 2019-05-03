// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  return  array.slice(0,2)
}

const returnLastTwoDrivers = function (array) {
  return  array.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  return function (num){
    return int * num
  }
}

function fareDoubler(int) {
  return int * 2
}

function fareTripler(int) {
  return int * 3
}

function selectDifferentDrivers(array, func) {
  return func(array)
}
