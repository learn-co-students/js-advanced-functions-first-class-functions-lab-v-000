// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
  return arr.slice(0, 2);
};

const returnLastTwoDrivers = function(arr) {
  return arr.slice(-2);
};

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

function createFareMultiplier(int) {
  return function (int) {
    return int * int
  }
}

const fareDoubler = function (int) {
  return int * 2
};

const fareTripler = function (int) {
  return int * 3
};

function selectDifferentDrivers(arr, f) {
  return f(arr);
}
