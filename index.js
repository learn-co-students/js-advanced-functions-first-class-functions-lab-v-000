// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function (fare) {
    return fare * integer;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);
// const fareDoubler = function (fare) {
//   return createFareMultiplier(2)(fare);
// }
//
// const fareTripler = function (fare) {
//   return createFareMultiplier(3)(fare);
// }

function selectDifferentDrivers(arrayOfDrivers, someFunction) {
  return someFunction(arrayOfDrivers);
}
