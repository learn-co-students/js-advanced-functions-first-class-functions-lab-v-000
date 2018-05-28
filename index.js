// Code your solution in this file!
const returnFirstTwoDrivers=function(drivers){
 return drivers.slice(0, drivers.length-2);
 };

const returnLastTwoDrivers=function(drivers){
  return drivers.slice(-2);
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier=function(multiplier){
  return function(value){
    return multiplier*value
  }
}

function fareDoubler(fare){
 return createFareMultiplier(fare)(2)
}

function fareTripler(fare){
 return createFareMultiplier(fare)(3)
}

function selectDifferentDrivers(drivers,fn){
 return fn(drivers)
}
