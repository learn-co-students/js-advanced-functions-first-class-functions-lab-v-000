// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = (array) => {
  return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
  return (fare) => {
    return multiplier * fare;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = (drivers, fn) => {
  return fn(drivers);
};
