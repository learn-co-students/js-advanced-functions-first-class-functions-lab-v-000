// ## Objectives
//1. Invoke functions assigned to a variable.
//2. Invoke functions stored in a data structure.
//3. Write functions that return other functions.
//4. Pass a function to another function.
//5. Call a function returned by another function.

const returnFirstTwoDrivers = (function (drivers){
  return drivers.slice(0,2);
})
const returnLastTwoDrivers = (function (drivers){
  return drivers.slice(Math.max(drivers.length - 2, 1));
})

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

function createFareMultiplier(multiplier){
  return function (num) { return num * multiplier }
};

const fareDoubler = (function (fare) {
  return fare * 2
})

const fareTripler = (function (fare){
  return fare * 3
})

function selectDifferentDrivers(drivers, fn) {
  return fn(drivers)
};
