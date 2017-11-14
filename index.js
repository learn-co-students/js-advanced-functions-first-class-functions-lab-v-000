const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

const createFareMultiplier = function (multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const fareDoubler = function (fare) {
  return fare * 2;
}

const fareTripler = function (fare) {
  return fare * 3;
}

const selectDifferentDrivers = function (array, func) {
  return func(array);
}
