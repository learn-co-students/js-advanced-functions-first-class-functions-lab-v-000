// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
// slice(arg1, arg2)
//arg1 is where you start
// arg2 is immediately following where you stop
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int) {
  return function (factor) {
    return int * factor;
  };
};


 const fareDoubler = createFareMultiplier(2)

 const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, fn) {
  return fn(drivers)
}
