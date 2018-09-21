// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) { //  return drivers.slice(-2); }
  return drivers.slice(drivers.length -2, drivers.length );
  //  return drivers.slice(-2);
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
  return fareDoubler(num) + num ;
}

 // const createFareMultiplier = function (multiplyValue) {
 //   return function (value) {
 //     return multiplyValue * value;
 //   };
 // };
 //
 // const fareDoubler = createFareMultiplier(2);
 //
 // const fareTripler = createFareMultiplier(3);



function fetchSpecifiedDrivers(arrayOfDrivers, cb) {
  return cb(arrayOfDrivers)
}
