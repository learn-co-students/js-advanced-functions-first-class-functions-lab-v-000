// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];


const returnFirstTwoDrivers = function(drivers) {
 return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
 return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(val) {
  return function(multiplier) {
    return multiplier*val
  }
}

function fareDoubler(val) {
  return val*2
}

function fareTripler(val) {
  return val*3
}

function fetchSpecifiedDrivers(drivers, func) {
   return func(drivers);
 }
