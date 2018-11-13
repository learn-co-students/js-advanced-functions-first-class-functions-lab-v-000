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
