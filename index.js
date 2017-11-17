// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0, 2);
};

const returnLastTwoDrivers = function (arr) {
  return arr.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

const fareDoubler =  function (fare) {
    return fare * 2;
  };

const fareTripler =  function (fare) {
    return fare * 3;
  };

function selectDifferentDrivers(arr, method) {
  return method(arr);
}
