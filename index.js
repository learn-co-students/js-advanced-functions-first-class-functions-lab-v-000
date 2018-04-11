// Code your solution in this file!

  const returnFirstTwoDrivers = function (drivers) {
      return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};

function fareDoubler(fares) {
  return fares * 2;
}

function fareTripler(fare) {
  return fare * 3;
}

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
}