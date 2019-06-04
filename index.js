// Code your solution in this file!
const returnFirstTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.slice(0, 2);
};

const returnLastTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.slice(-2);
};

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

const createFareMultiplier = function (x) {
  return function (fare) {
    return fare * x;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(arrayOfDrivers, chosenFunction) {
  return chosenFunction(arrayOfDrivers);
};
