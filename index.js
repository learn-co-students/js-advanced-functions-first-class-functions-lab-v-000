// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = (array) => {
  return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
  return function(fare) {
    return multiplier * fare;
  };
};

const fareDoubler = (fare) => {
  return fare * 2;
};

const fareTripler = (fare) => {
  return fare * 3;
};

const fetchSpecifiedDrivers = (drivers, fn) => {
  return fn(drivers);
}
