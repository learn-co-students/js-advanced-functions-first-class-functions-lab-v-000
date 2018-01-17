// Code your solution in this file!
const returnFirstTwoDrivers = function(array) { let newarray = []; newarray.push(array[0], array[1]); return newarray;}

const returnLastTwoDrivers = function(array) { let newarray = []; newarray.push(array[array.length - 2], array[array.length - 1]); return newarray;}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (integer) {
  return function (fare) {
    return (fare * integer);
    };
  };

function fareDoubler (fare) {
  return fare * 2;
}

function fareTripler (fare) {
  return fare * 3;
}

function selectDifferentDrivers (array, constant) {
  return constant(array);
}
