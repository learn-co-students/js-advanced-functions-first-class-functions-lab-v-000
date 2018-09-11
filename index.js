const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const fareDoubler = function (fare) {
  return fare * 2;
};

const fareQuintupler = function (fare) {
  return fare * 5;
};

const fareTripler = function (fare) {
  return fare * 3;
};

function createFareMultiplier (n) {
  if (n === 2) {
    return fareDoubler;
  } else if (n === 3) {
    return fareTripler;
  } else if (n === 5) {
    return fareQuintupler;
  }
};

function fetchSpecifiedDrivers (arrayOfDrivers, someFunction) {
  if (someFunction === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
  } else {
  return returnLastTwoDrivers(arrayOfDrivers);
  };
};
