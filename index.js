const returnFirstTwoDrivers = function (drivers) {
  const new_drivers = [];
  new_drivers.push(drivers[0], drivers[1]);
  return new_drivers;
}

const returnLastTwoDrivers = function (drivers) {
  const new_drivers = [];
  new_drivers.push(drivers[drivers.length - 2], drivers[drivers.length - 1]);
  return new_drivers;
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, selection) {
  return selection(drivers); 
}
