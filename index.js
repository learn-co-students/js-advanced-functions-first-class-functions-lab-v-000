// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  new_array = array.slice(0,2);
  return new_array;
};

const returnLastTwoDrivers = function (array) {
  new_array = array.slice(-2);
  return new_array;
};


const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
];


function createFareMultiplier (num1) {
  return function (num2) {
    return num1*num2;
  };
};

function fareDoubler (num1) {
    return num1*2;
};

function fareTripler (num1) {
    return num1*3;
};

function fetchSpecifiedDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers);
}
