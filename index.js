// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice( 0, 2 );
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice( -2 );
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyBy) {
  return function (value) {
    return multiplyBy * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, firstOrLastDriversFunctions) {
  return firstOrLastDriversFunctions(drivers);
} ;
