const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
  return function(value) {
    return multiplyValue * value;
  };
};

// const fareDoubler = function (fare) {
//   return fare * 2;
// };

const fareDoubler = createFareMultiplier(2);

// const fareTripler = function (fare) {
//   return fare * 3;
// };

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};
