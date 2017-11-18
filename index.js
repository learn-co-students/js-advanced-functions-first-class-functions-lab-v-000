// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return [drivers[0],drivers[1]];
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [
returnFirstTwoDrivers,
returnLastTwoDrivers
];

const createFareMultiplier = function (fare) {
  return function (num) {
    return fare * num ;
  };
};

const fareDoubler = function (fare) {
  return createFareMultiplier(fare)(2);
}

const fareTripler = function (fare) {
  return createFareMultiplier(fare)(3);
}

function selectDifferentDrivers(drivers, func) {
  return func(drivers);
}
