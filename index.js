// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  return drivers.filter (function (driver) {
    return driver === drivers[0] || driver === drivers[1];
  })
}

const returnLastTwoDrivers = function (drivers) {
  let total = drivers.length

  return drivers.filter(function (driver) {
    return driver === drivers[total - 1] || driver === drivers[total - 2];
  })
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (num) {
  return function (fare) {
    return fare * num;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers (drivers, whichDrivers) {
  return whichDrivers(drivers);
}
