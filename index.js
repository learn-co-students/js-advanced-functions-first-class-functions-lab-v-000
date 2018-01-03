// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length-2, drivers.length);
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

const createFareMultiplier = function (fare) {
  return function (mult) {
    return fare * mult;
  }
}

const fareDoubler = function (fare) {
  let mult = 2;
  return createFareMultiplier(fare)(mult);
}

const fareTripler = function (fare) {
  let mult = 3;
  return createFareMultiplier(fare)(mult);
}

const selectDifferentDrivers = function (arrayOfDrivers, passFunction) {
  return passFunction(arrayOfDrivers);
}
