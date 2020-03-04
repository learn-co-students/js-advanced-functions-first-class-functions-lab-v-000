const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int) {
  return function(fare) {
    return fare * int;
  };
};

const fareDoubler = createFareMultiplier(2); //accepts a fare as its argument, but don't need to specify that here-will just automatically be accessible to function

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, func) {
  return func(drivers);
}
