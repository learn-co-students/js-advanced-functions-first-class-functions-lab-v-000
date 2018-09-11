const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (n) {
  return function (fare) {
    return fare * n ;
  };
};

const fareDoubler = createFareMultiplier (2);
const fareTripler = createFareMultiplier (3);

function fetchSpecifiedDrivers (arrayOfDrivers, someFunction) {
  if (someFunction === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
  } else {
  return returnLastTwoDrivers(arrayOfDrivers);
  };
};
