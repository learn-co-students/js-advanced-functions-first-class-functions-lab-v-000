const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiple) {
  return function(fare) {
    return fare * multiple;
  };
};

const fareDoubler = function createFareMultiplier(multiple = 2) {
  return function(fare) {
    return fare * multiple;
  };
};
