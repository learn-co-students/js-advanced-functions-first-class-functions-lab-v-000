// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  newDrivers = drivers.slice(0,2);
  return newDrivers;
}

const returnLastTwoDrivers = function(drivers) {
  newDrivers = drivers.slice(-2);
  return newDrivers;
}

const selectingDrivers = [];
selectingDrivers.push(returnFirstTwoDrivers, returnLastTwoDrivers);

function createFareMultiplier(num) {
  return function(fare) { return fare * num }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverFunction) {
  return driverFunction(drivers);
}
