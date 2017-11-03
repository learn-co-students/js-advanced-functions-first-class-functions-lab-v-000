const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(drivers.length - 2);
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = (number) => {
  return (multiplier) => {
    return number * multiplier;
  }
}

const fareDoubler = (createFareMultiplier) => {
  return createFareMultiplier * 2;
}

const fareTripler = (createFareMultiplier) => {
  return createFareMultiplier * 3;
}

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
  return returnFirstTwoDrivers(drivers);
}