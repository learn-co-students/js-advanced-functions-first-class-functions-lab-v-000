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

function fareDoubler(){

}

function fareTripler(){

}

function selectDifferentDrivers(drivers,fn){

}
