// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(int1){
  return function(fare){
  return  int1 * fare;
  }
}

const fareDoubler = function(fare){
return 2*fare;
}

const fareTripler= function(fare){
  return 3*fare;
}

function selectDifferentDrivers(array1, f1){
  return f1(array1);
}
