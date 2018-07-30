// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  let arr = []
  arr.push(drivers[0], drivers[1])
  return arr
}

const returnLastTwoDrivers = function(drivers) {
  let arr = []
  arr.push(drivers[drivers.length-2], drivers[drivers.length-1])
  return arr
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function(fare) {
    return int * fare
  }
}

function fareDoubler(fare) {
  return fare * 2
}

function fareTripler(fare) {
  return fare * 3
}

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers)
}
