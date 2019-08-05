// Code your solution in this file!
const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers) {
  const newArray = drivers.slice(0,2);
  return newArray;
}

const returnLastTwoDrivers = function returnLastTwoDrivers(drivers) {
  newArray = drivers.slice(-2);
  return newArray;
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (num) {
    return function (fare) {
      return num * fare
  };
}

function fareDoubler(num) {
  return 2 * num;
}

function fareTripler(num) {
  return 3 * num;
};

function selectDifferentDrivers(arrayOfDrivers, func) {
    const array = func(arrayOfDrivers);
     return array;
};
