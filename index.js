// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
  }
  
  const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
  
  const createFareMultiplier = function(int) {
    return function(value) {
      return int * value;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const fetchSpecifiedDrivers = function(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
  };
  const selectDifferentDrivers = function(arrayOfDrivers, f) {
      return f(arrayOfDrivers);
  }
