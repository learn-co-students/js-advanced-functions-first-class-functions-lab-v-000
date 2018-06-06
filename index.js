

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return function(num) {
    return num * num
  };
};

const fareDoubler = function (createFareMultiplier) {
  return createFareMultiplier * 2
}

const fareTripler = function (createFareMultiplier) {
  return createFareMultiplier * 3
}

function selectDifferentDrivers(drivers, cb) {
  return cb(drivers);
}