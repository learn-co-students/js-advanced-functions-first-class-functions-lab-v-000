// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(Math.max(drivers.length - 2));
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
  return function(num) {
    return num * fare;
  };
}

// const fareDoubler = function(fare) {
//   return fare * 2;
// };

const fareDoubler = createFareMultiplier(2);

// const fareTripler = function(fare) {
//   return fare * 3;
// };

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, f) {
  return f(drivers);
}
