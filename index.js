// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];



const returnFirstTwoDrivers = function(array) {
  return Object.assign([],array).slice(0,2);

}

const returnLastTwoDrivers = function(array) {
  return Object.assign([],array).slice(array.length-2,array.length);

}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];



const createFareMultiplier = function (x) {
  return function (y) {
    return x * y;
  };
}


const fareDoubler = function (x) {
  return 2*x
}


const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(array, selector) { return selector(array)}
