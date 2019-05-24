const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (drivers, func) {
  return func(drivers);
}
