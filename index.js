const returnFirstTwoDrivers = function (drivers) {
  newArr = []
  newArr.push(drivers[0]);
  newArr.push(drivers[1]);
  return newArr;
};

const returnLastTwoDrivers = function (drivers) {
  newArr = []
  newArr.push(drivers[drivers.length - 2]);
  newArr.push(drivers[drivers.length - 1]);
  return newArr;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function (n) {
    return n * n;
  };
}

const fareDoubler = function (fare) {
  return (fare * 2);
}

const fareTripler = function (fare) {
  return (fare * 3);
}

function fetchSpecifiedDrivers(drivers, fn) {
  return fn(drivers);
}