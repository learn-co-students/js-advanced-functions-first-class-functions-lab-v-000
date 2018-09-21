// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length -2, drivers.length );
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

function createFareMultiplier(num) {
  return function (num) {
  return  num * num
  }
}

function fareDoubler(num) {
  return  num + num;
}

 function fareTripler(num) {
  return fareDoubler(num) + num;
 }

function fetchSpecifiedDrivers(arrayOfDrivers, cb) {
  return cb(arrayOfDrivers)
}
