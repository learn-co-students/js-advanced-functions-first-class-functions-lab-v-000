// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
  return function(num) {
    return num * x;
  }
}

function fareDoubler(x) {
  return x * 2;
}

function fareTripler(x) {
  return x * 3;
}

function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}
