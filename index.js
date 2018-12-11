// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  let firstTwo = drivers.slice(0, 2);
  return firstTwo;
};

const returnLastTwoDrivers = function(drivers){
  let lastTwo = drivers.slice(-2);
  return lastTwo;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function(fare) {
    return integer * fare;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(arrayofDrivers, driversFn) {
  return driversFn(arrayofDrivers);
}
