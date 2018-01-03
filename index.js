// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2)
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function(fare) {
    return fare * int
  };
}

const fairDoubler = function(fare) {
  return createFareMultiplier(2);
}

const fairTripler = function(fare) {
  return createFareMultiplier(3);
}

function selectDifferentDrivers(drivers, driversFunction) {
  return driversFunction(drivers)
}
