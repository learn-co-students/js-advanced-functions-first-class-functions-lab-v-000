// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function (drivers) {
  return [drivers.slice(-2)[0], drivers.slice(-1)[0]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
  return function (num) { return num * multiplier};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, func) {
  return func(drivers);
}
