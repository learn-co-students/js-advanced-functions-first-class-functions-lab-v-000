// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(Math.max(drivers.length - 2, 0))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
  return function(fare){
    return (fare*multiplier);
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(arrayOfDrivers, givenFunction){
  return givenFunction(arrayOfDrivers)
}

// function fetchSpecifiedDrivers(arrayOfDrivers, function){
//
// }
