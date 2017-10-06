// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
  return array.slice(0,2);
}

const returnLastTwoDrivers = function(array) {
  return array.slice(array.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
  return function(num) {
    return fare * num;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, cb) {
  return cb(array);
}
