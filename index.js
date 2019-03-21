const returnFirstTwoDrivers = (drivers) => [drivers[0], drivers[1]];

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return (fare) => fare * num;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, returnFx) {
    return returnFx(drivers);
}
