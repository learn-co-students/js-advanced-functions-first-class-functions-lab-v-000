// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(list) {
  return list.slice( - 2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
    return function(num) {
      return num * multiplier;
    }
}

const fareDoubler = function(fare) {
  return fare * 2;
}

const fareTripler = function(fare) {
  return fare * 3;
}

const selectDifferentDrivers = function(list, fn) {
  return fn(list);
}
