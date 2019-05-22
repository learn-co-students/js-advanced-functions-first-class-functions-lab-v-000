// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    let newArr = [];
    newArr.push(drivers[0], drivers[1]);
    return newArr;
  }

  const returnLastTwoDrivers = function(drivers) {
    let newArr = [];
    newArr.push(drivers[drivers.length - 2], drivers[drivers.length - 1]);
    return newArr;
  }

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, driversFunc) {
  return driversFunc(drivers);
}
