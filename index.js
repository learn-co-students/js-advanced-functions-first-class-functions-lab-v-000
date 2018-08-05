// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int1) {
  return function(int2){
    return int1 * int2;
  };
};

const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function(array, drivers) {
  return drivers(array);
}
