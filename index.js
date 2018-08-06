// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
  const driverMatches = [];
  driverMatches.push(drivers[0]);
  driverMatches.push(drivers[1]);
  return driverMatches;
};

const returnLastTwoDrivers = function (drivers){
  const driverMatches = [];
  driverMatches.push(drivers[drivers.length-2]);
  driverMatches.push(drivers[drivers.length-1]);
  return driverMatches;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (int) {
  return function (num) {
    return num * int;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn){
  return fn(drivers);
};
