const returnFirstTwoDrivers = function(array) {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = function(array) {
  return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {
    return multiplier * fare;
  };
};

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare);
};

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers(array, func) {
  return func(array);
};
