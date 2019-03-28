// Code your solution in this file!

const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function returnLastTwoDrivers(drivers) {
  return drivers.slice(drivers.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function createFareMultiplier(fare) {
    return fare * integer
  }
}

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare)
}

function fetchSpecifiedDrivers(drivers, fetch) {
  return fetch(drivers)
}
