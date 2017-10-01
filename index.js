// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers){
  const firstTwo = [drivers[0], drivers[1]]
  return firstTwo
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(drivers.length-2,drivers.length)
}

const selectingDrivers = [
 returnFirstTwoDrivers,
 returnLastTwoDrivers
]

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, fn){
  return fn(drivers)
}