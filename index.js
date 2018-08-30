// Code your solution in this file!

const returnFirstTwoDrivers = function(list) {
  var newArray = [];
  var driver1 = list[0];
  var driver2 = list[1];
  newArray.push(driver1);
  newArray.push(driver2);
  return newArray
}

const returnLastTwoDrivers = function(list) {
  var newArray = [];
  var driver1 = list[list.length - 2];
  var driver2 = list[list.length - 1];
  newArray.push(driver1);
  newArray.push(driver2);
  return newArray
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
  return function(value) {
    return multiplyValue * value;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers,whichDrivers) {
  return whichDrivers(drivers);
}
