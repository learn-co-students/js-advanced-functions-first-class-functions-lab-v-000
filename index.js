// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function(fareMultiplier) {
  return function (value) {
    return fareMultiplier * value;
    };
};

const fareDoubler = function (double) {
  return double * 2 ;
};

const fareTripler = function (tripler) {
  return tripler * 3;
};

const selectDifferentDrivers = function(drivers, whichDrivers) {
  return whichDrivers(drivers);
};
