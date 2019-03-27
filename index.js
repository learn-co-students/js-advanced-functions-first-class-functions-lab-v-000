// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(anotherInteger) {
        return integer * anotherInteger;
    };
};

const fareDoubler = function(num){
  return createFareMultiplier(2)(num);
}

const fareTripler = function(num){
  return createFareMultiplier(3)(num);
}

function fetchSpecifiedDrivers(drivers, fn) {
  return fn(drivers);
}
