// Code your solution in this file!
// annonomus function to return first 2 vales of an array.
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
}

const  returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [
  returnFirstTwoDrivers, returnLastTwoDrivers
];

const createFareMultiplier = function(multiplyValue) {
    return function (value) {
    return multiplyValue * value;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(drivers, whichDriver) {
  return whichDriver(drivers);
}
