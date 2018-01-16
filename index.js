const returnFirstTwoDrivers = function (drivers) {
  return [drivers[0], drivers[1]];
};
const returnLastTwoDrivers = function (drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
};
selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function (multiplier) {
  return function(num) {
    return num * multiplier;
  }
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
};
