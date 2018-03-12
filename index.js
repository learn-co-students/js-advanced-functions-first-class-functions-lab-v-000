// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function functionName(fare) {
      return multiplier * fare
  }

}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, firstorlast) {
  return firstorlast(drivers)
}
