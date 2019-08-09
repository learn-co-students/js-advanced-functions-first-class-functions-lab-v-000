// Code your solution in this file!
function returnFirstTwoDrivers (drivers) {
  const firstTwoDrivers = drivers.slice(0,2);
  return firstTwoDrivers;
}

function returnLastTwoDrivers (drivers) {
  const lastTwoDrivers = drivers.slice(-2);
  return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  }
}

function fareDoubler(fare) {
  const multiplier = createFareMultiplier(2);
  return multiplier(fare);
}

function fareTripler(fare) {
  const multiplier = createFareMultiplier(3);
  return multiplier(fare);
}

function selectDifferentDrivers (drivers, cb) {
  return cb(drivers);
}
