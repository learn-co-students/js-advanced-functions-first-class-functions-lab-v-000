// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2)
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length - 2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
  return function multiplyFareBy(multiplier) {
    return fare * multiplier;
  };
};

function fareDoubler(fare) {
  return createFareMultiplier(fare)(2);
};

function fareTripler(fare) {
  return createFareMultiplier(fare)(3);
}

function fetchSpecifiedDrivers(arrayOfDrivers, func) {
  if (func === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
  } else if (func === returnLastTwoDrivers) {
    return returnLastTwoDrivers(arrayOfDrivers);
  };
};
