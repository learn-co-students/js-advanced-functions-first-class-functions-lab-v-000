
const returnFirstTwoDrivers = function(drivers) {
  return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = function(drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function (fare) {
    return int * fare;
  }
}

const fareDoubler = function (fare) {
  return createFareMultiplier(fare)(2);
}

const fareTripler = function (fare) {
  return createFareMultiplier(fare)(3);
}

function selectDifferentDrivers(drivers, func) {
  return func(drivers);
}