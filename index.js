const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2)
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiply) {
  return function(value) {
    return multiply * value
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(driversArray, drivers) {
  return drivers(driversArray)
};
