function returnFirstTwoDrivers(driversArray) {
  return driversArray.slice(0, 2);
}

function returnLastTwoDrivers(driversArray) {
  return driversArray.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare);
};

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers(arrayOfDrivers, selectingDrivers) {
  return selectingDrivers(arrayOfDrivers);
}
