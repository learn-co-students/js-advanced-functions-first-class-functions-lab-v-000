// Code your solution in this file!
const returnFirstTwoDrivers = function(list) {
  return list.slice(0, 2);
}

const returnLastTwoDrivers = function(list){
  return list.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplierValue) {
  return function (value) {
    return multiplierValue * value;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, selection) {
  return selection(drivers);
}
