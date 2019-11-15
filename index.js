// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier
  };
};

const fareDoubler = createFareMultiplier(2);
//fareDoubler(5);

const fareTripler = createFareMultiplier(3);
//fareDoubler(5);


const selectDifferentDrivers = function (drivers,selector) {
  return selector(drivers);
};
