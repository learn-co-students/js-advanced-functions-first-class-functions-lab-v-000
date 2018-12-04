// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (driver) {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (num1) {
  return function (num) {
    return num * num;
  }
}

const fareDoubler = function (fare) {
  return fare*2;
}

const fareTripler = function (fare) {
  return fare*3;
}

function fetchSpecifiedDrivers(arrayOfDrivers, fn){
  return fn(arrayOfDrivers);
}
