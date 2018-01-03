// Code your solution in this file!
const returnFirstTwoDrivers = function firstTwo(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function lastTwo(drivers) {
  return drivers.slice(drivers.length-2, drivers.length);
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

const createFareMultiplier = function fareMultiplier(fare) {
  return function (mult) {
    return fare * mult;
  }
}

const fareDoubler = function doubleFare(fare) {
  let mult = 2;
  return createFareMultiplier(fare)(mult);
}

const fareTripler = function tripleFare(fare) {
  let mult = 3;
  return createFareMultiplier(fare)(mult);
}

const selectDifferentDrivers = function selectingDrivers(arrayOfDrivers, passFunction) {
  return passFunction(arrayOfDrivers);
}
