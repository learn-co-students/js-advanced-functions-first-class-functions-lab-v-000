// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
  return arr.slice(0, 2);
};

const returnLastTwoDrivers = (arr) => {
  return arr.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = (arr, func) => {
  return func(arr);
};