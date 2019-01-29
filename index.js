const returnFirstTwoDrivers = function(drivers) {
  /*
  const firstTwoDrivers = [];
  for (let d = 0; d < 2; d++) {
    firstTwoDrivers.push(drivers[d]);
  }
  return firstTwoDrivers;
  */

  // Code above acomplishes same task as the slice function below

  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

const createFareMultiplier = function(multiplier) {
  return function(num) {
    return num * multiplier;
  }
}

/*
const fareDoubler = function(num) {
    return num * 2;
}
*/
const fareDoubler = createFareMultiplier(2);

/*
const fareTripler = function(num) {
  return num * 3;
}
*/
const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(drivers, returnedDrivers) {
  return returnedDrivers(drivers);
}
