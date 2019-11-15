// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
    return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function (drivers) {
    return [drivers[drivers.length -2], drivers[drivers.length -1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer){
return function (num) {
  return num * integer
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(driverArray, i) {
  return i(driverArray)
}
