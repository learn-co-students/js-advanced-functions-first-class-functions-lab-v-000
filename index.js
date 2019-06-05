// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

function createFareMultiplier(num) {
  return function(fare) {
    return num * fare;
  }
}

function fareDoubler(fare) {
  const multipliedFare = createFareMultiplier(fare)
  return multipliedFare(2);
}

function fareTripler(fare) {
  const multipliedFare = createFareMultiplier(fare)
  return multipliedFare(3);
}

function fetchSpecifiedDrivers(drivers, func) {
  if (func == returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
  } else if (func == returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
  }
}
