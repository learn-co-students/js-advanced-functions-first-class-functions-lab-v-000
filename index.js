// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
  return [arr[0], arr[1]]
}

const returnLastTwoDrivers = function (arr) {
  return [arr[arr.length - 2], arr[arr.length - 1]]
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];
const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};
