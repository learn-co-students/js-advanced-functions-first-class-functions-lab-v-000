const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2)
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(Math.max(drivers.length - 2, 1))
};

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
];

const createFareMultiplier = function (fareMultiplier) {
  return function (num) {
    return num * fareMultiplier
  };
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, function) {

}






