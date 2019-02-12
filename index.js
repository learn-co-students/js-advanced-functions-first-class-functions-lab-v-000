// Code your solution in this file!

const returnFirstTwoDrivers = function  (array) {
  new_array = []
  new_array.push(array[0])
  new_array.push(array[1])
  return new_array;
};

const returnLastTwoDrivers = function (array) {
  new_array = []
  new_array.push(array[array.length -2])
  new_array.push(array[array.length -1])
  return new_array;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(n) {
  return function(fare) {
    return fare * n;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
};
