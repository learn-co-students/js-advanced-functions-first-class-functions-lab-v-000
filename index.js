// Code your solution in this file!

const d = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers) {
  // console.log(drivers);
  return [drivers[0], drivers[1]];

  // return Object.assign([], drivers[0], drivers[1]);
  //
};

const returnLastTwoDrivers = function (drivers) {
  return [drivers[drivers.length-2], drivers[drivers.length-1]];
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

const createFareMultiplier = function (multiplier) {
  return function (num) {
    return num * multiplier
  }
};

function fareDoubler(fare) {
  return fare * 2;
};

function fareTripler(fare) {
  return fare * 3;
};

const selectDifferentDrivers = function (arrayOfDrivers, method) {
  return method(arrayOfDrivers);
}
