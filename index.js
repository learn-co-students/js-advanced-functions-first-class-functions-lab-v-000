// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(drivers.length - 2, drivers.length)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
}

function selectDifferentDrivers(drivers, whichDrivers){
  return whichDrivers(drivers)
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
