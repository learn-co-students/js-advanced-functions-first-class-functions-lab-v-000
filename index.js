const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length-2, drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (integer) {
  return function (element) {
    return element * integer;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, someFunction) {
  return someFunction(drivers);
}