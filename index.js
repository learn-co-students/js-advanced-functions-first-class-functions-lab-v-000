// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  const twoDrivers = [drivers[0], drivers[1]]
  return twoDrivers
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}


const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

const createFareMultiplier = function(integer) {
  return function (fare) {
    return fare * integer
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func) {
  return func(drivers)
}
//keyword function was not passing this last test
