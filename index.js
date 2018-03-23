// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

const selectingDrivers = []
selectingDrivers.push(returnFirstTwoDrivers,returnLastTwoDrivers)

const createFareMultiplier = function(num){
  return function(distance){
    return distance * num;
  };
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, desiredFunction){
  return desiredFunction(drivers);
}
