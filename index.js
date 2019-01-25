// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
}
const returnLastTwoDrivers = function (array) {
  return array.slice(-2);
}

const selectingDrivers = function () {
  return [returnFirstTwoDrivers(), returnLastTwoDrivers()];
}

const createFareMultiplier = function (integer) {
  return function (fare) {
    return fare * integer;
  }
}

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare);
}

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare);
}

// function fetchSpecifiedDrivers (drivers, function) {
//   if (function(drivers) === returnFirstTwoDrivers(drivers)) {
//     return returnFirstTwoDrivers(drivers);
//   } else if (function(drivers) === returnFirstTwoDrivers(drivers)) {
//     return returnLastTwoDrivers(drivers);
//   };
// }
