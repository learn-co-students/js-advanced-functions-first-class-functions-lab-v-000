// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function (num) {
  return function(fare) {
    return fare * num;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn) {
  /* returnFirstTwoDrivers
      ƒ (drivers) {
      return drivers.slice(0,2);

      returnLastTwoDrivers
      ƒ (drivers) {
      return drivers.slice(-2);  */
  return fn(drivers);
};
