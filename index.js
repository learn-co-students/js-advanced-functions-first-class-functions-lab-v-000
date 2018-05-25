// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//Higher-order function is a function that does at least one of the following: takes one or more functions as arguments (i.e. procedural parameters), returns a function as its result.in our case, it returns a function as a result! see below:

const createFareMultiplier = function(multiple){
  return function(fare){
    return fare * multiple;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn){
  return fn(drivers)
}
