// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int) {
  return function(fare) {
    return fare * int;
  };
};

const fareDoubler = function(fare) {
  let result = createFareMultiplier(2)(fare);
  return result;
}

const fareTripler = function(fare) {
  let result = createFareMultiplier(3)(fare);
  return result;
}

const fetchSpecifiedDrivers = function(drivers, func) {
  return func(drivers);
}
