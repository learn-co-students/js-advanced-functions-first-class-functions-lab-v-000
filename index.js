// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  return array.slice(0,2);
}

const returnLastTwoDrivers = function (array) {
  return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (integer) {
  return function (fare) {
    return fare * integer;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, fn) {
  return fn (array);
}
