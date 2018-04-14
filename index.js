const returnFirstTwoDrivers = function (drivers) {
  const newDrivers = drivers.slice(0, 2);
  return newDrivers;
};

const returnLastTwoDrivers = function (drivers) {
  const newDrivers = drivers.slice(-2);
  return newDrivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (int) {
  return function (fare) {
      return int * fare;
  };
};

const fareDoubler = function (fare) {
  return createFareMultiplier(1)(fare) * 2;
};

const fareTripler = function (fare) {
  return createFareMultiplier(1)(fare) * 3;
};

const selectDifferentDrivers = function (drivers, cb) {
  return cb(drivers);
};
