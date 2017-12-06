// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
  return array.slice(0, 2);
}

const returnLastTwoDrivers = function (array) {
  return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

function createFareMultiplier (int) {
  return function (fare) {
    return fare * int;
  }
}

function fareDoubler (cost) {
  return createFareMultiplier(2)(cost);
}

function fareTripler (fare) {
  return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers (array,func) {
  return func(array);
}
