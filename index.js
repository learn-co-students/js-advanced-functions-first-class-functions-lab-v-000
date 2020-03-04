// Code your solution in this file!

// const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (list) {
  return list.slice(0, 2);
}

const returnLastTwoDrivers = function (list) {
  return list.slice(-2);
}

const selectingDrivers  = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
  return function (fare) {
    return fare * number;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversFunction) {
  return driversFunction(drivers);
};
