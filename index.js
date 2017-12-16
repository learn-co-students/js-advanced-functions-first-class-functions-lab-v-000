// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (integer) {
  return function (fare) {
    return fare * integer;
  };
}

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare);
}

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare);
}

const selectDifferentDrivers = function (drivers, fn) {
  return fn(drivers);
}
