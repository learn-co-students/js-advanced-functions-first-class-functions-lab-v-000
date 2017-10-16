// Code your solution in this file!

  const returnFirstTwoDrivers = function(drivers) { return drivers.slice(0,2) }

  const returnLastTwoDrivers  = function(drivers) { return drivers.slice(Math.max(drivers.length - 2, 1)) }

  const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
  ];

  const createFareMultiplier = function(fare) {
    return function (multiplier) {
      return multiplier * fare
    }
  }

  const fareDoubler = createFareMultiplier(2)

  const fareTripler = createFareMultiplier(3)

  const selectDifferentDrivers = function(drivers, called) {
    return called(drivers)
  }
