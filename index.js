// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
  };
  
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(Math.max(drivers.length - 2, 1))
};