// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

// function selectingDrivers(drivers) {
//   let drivers = [];
//   drivers.push(returnFirstTwoDrivers, returnLastTwoDrivers);
//   return drivers.map(function(driver) {
//     return driver();
//   })
// }

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(integer) {
  return function(fare) {
    return integer * fare;
  }
}


function fareDoubler(fare) {
  return fare * 2;
}

function fareTripler(fare) {
  return fare * 3;
}

// function fetchSpecifiedDrivers(arrayOfDrivers, function) {
//   return arrayOfDrivers.map(function(driver) {
//     return driver.function();
//   });
// }

function fetchSpecifiedDrivers(drivers, funct) {
  return funct (drivers);
}

