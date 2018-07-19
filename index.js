// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  return array.slice(0,2);
}

const returnLastTwoDrivers = function (array) {
  return array.slice(array.length-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(x) {
  return function () {
    return 5*x;
  };
}

const fareDoubler = function(x) {
  return x*2;
}

const fareTripler = function(x) {
  return x*3;
}

const selectDifferentDrivers = function(driverArray, fn) {
  return fn(driverArray);
}
