// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (fare) {
  return function (num) {
    return fare * num;
  }
}

const multiplier = createFareMultiplier(2);

function fareDoubler (fare) {
  return multiplier(fare);
}

const tripler = createFareMultiplier(3);

function fareTripler (fare) {
  return tripler(fare);
}

function selectDifferentDrivers (drivers, cb) {
  return cb(drivers);
}
