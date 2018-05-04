// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
};

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

function createFareMultiplier(multiply_by){
  return function multiplier(fare){
    return fare*multiply_by;
  }
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selection){
  return selection(drivers);
};
