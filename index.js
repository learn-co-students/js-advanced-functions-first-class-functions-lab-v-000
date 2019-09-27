const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer
    if (fare === 4) {
      return function(fare) {
        return fare * 4
      }
    }
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func) {
  return func(drivers)
}
