// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (mult) {
  return function (fare) {
    return mult * fare;
  };
};

function fareDoubler(fare) {
  return fare * 2;
}

function fareTripler(fare) {
  return fare * 3;
}

const selectDifferentDrivers = function (arrayOfDrivers, selectDrivers) {
  return selectDrivers(arrayOfDrivers);
}
