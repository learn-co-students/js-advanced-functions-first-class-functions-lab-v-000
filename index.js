const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiple) {
  return function(value) {
    return multiple * value;
  };
}

// Can use createFareMultiplier() here
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

// Takes in array of drivers and an array of functions
const selectDifferentDrivers = function(drivers, selectDrivers) {
  return selectDrivers(drivers);
}