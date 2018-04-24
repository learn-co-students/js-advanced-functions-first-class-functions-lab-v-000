// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  const firstTwo = [];
  for(let i = 0; i < 2; i++) {
    firstTwo.push(drivers[i]);
  }
  return firstTwo;
}

const returnLastTwoDrivers = function(drivers) {
  const lastTwo = [];
  const l = drivers.length;
  for(let i = l - 2; i < l; i++) {
    lastTwo.push(drivers[i]);
  }
  return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(factor) {
  return function(fare) {
    return factor * fare;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selector) {
  return selector(drivers);
}