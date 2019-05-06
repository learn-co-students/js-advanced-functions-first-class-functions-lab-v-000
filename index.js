const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multipler) {
  return function (fare) {
    return fare * multipler;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


const fetchSpecifiedDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};