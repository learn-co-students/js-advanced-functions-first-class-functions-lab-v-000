// Code your solution in this file!
const returnFirstTwoDrivers = function(list) {
  return list.slice(0, 2);
}

const returnLastTwoDrivers = function(list) {
  return list.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer;
  };
}

const fareDoubler = createFareMultiplier(2);
// fareDoubler(fare);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(list, fn) {
  return fn(list);
}
