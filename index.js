// Code your solution in this file!
const returnFirstTwoDrivers = function (list) {
  return list.slice(0,2)
}

const returnLastTwoDrivers = function (list) {
  return list.slice(2,4)
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

const createFareMultiplier = function(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (list, driverFunction){
  return driverFunction(list);
}
