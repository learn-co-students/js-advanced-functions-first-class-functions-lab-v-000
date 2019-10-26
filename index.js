// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length - 2, drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function fareCalculator(fare) {
    return fare * int;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driversFn) {
  return driversFn(drivers);
}
