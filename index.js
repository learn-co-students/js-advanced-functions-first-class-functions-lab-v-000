// Code your solution in this file!


const returnFirstTwoDrivers = function (array) {
  return array.slice(0,2);
}

const returnLastTwoDrivers = function (array) {
  return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function (cost) { return cost * num }
}

function fareDoubler(cost) {
  return createFareMultiplier(2)(cost);
};

function fareTripler(fare) {
  return createFareMultiplier(3)(fare);
};
