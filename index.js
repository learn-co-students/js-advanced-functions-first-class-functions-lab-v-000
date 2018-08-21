// Code your solution in this file!
const returnFirstTwoDrivers = function (driversArray) {
  return driversArray.slice(0, 2);
}

const returnLastTwoDrivers = function (driversArray) {
  return driversArray.slice(driversArray.length - 2)
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

const createFareMultiplier = function (multiplier) {
  return function (num) {
    return num * multiplier
  };
}

const fareDoubler = function (number) {
  return number * 2;
}

const fareTripler = function (fare) {
  return fare * 3;
}

const selectDifferentDrivers = function (array, functionName) {
  return functionName(array);
}
