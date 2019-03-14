// Code your solution in this file! nhswz][=p-;o0l m,de4ghjlop-=0o987`` -slice(0,2);

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fare) {
   return function (multiplier) {
     return fare*multiplier;}
};

function fareDoubler(fare) {
  return 2 * fare;
};

function fareTripler(fare) {
  return 3 * fare;
};

function fetchSpecifiedDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(arrayOfDrivers);
};
