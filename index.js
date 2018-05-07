// Code your solution in this file!

const returnFirstTwoDrivers = function (array) {
  const newArray = [];
  for (let i = 0; i < 2; i++) {
    newArray.push(array[i]);
  }

  return newArray;
};

const returnLastTwoDrivers = function (array) {
  const newArray = [];
  for (i = array.length-1; i >= array.length-2; i--) {
    newArray.unshift(array[i]);
  }

  return newArray;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (int) {
  return function(fare) {
    return fare * int;
  }
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, func) {
  return func(drivers);
}
