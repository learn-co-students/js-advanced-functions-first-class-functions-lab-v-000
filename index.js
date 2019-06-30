// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  const newArray = [];
  newArray.push(drivers[0]);
  newArray.push(drivers[1]);
  return newArray;
}

const returnLastTwoDrivers = function (drivers) {
  const newArray = [];
  newArray.push(drivers.slice(-2)[0]);
  newArray.push(drivers.slice(-1)[0]);
  return newArray;
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (fare) {
  return function (num) {
    return fare * num;
  };
};

const fareDoubler = function (fare) {
  return fare * 2;
}

const fareTripler = function (fare) {
  return fare * 3;
}

const selectDifferentDrivers = function (arrayOfDrivers, func) {
  if (func === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
  } else if (func === returnLastTwoDrivers) {
    return returnLastTwoDrivers(arrayOfDrivers);
  };
}
