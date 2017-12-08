// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  return newArray = drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
  return newArray = drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driver_function) {
  return driver_function(drivers);
}
