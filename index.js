// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(drivers.length-2, drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
  return function(){
    return (int * int);
  }
}

function fareDoubler(int){
  return int * 2;
}

function fareTripler(int){
  return int * 3;
}

function fetchSpecifiedDrivers(arrayOfDrivers, func){
  return func(arrayOfDrivers);
}
