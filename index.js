// Code your solution in this file!
const returnFirstTwoDrivers = function(array_of_drivers) {
  return array_of_drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(array_of_drivers) {
  return array_of_drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(array_of_drivers, selection_function) {
  return selection_function(array_of_drivers);
}
