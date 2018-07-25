// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
  return function(fare){ return fare * multiplier};
}

const fareDoubler = function (fare) {
  const doubler = createFareMultiplier(2)
  return doubler(fare);
}

function fareTripler(fare) {
  const tripler = createFareMultiplier(3)
  return tripler(fare);
}

const selectDifferentDrivers = function (drivers, fn) {
  return fn(drivers)
}
