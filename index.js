const returnFirstTwoDrivers = function (driversArray){
    return driversArray.slice(0,2);
  }

const returnLastTwoDrivers = function(driversArray){
  return driversArray.slice(driversArray.length -2, driversArray.length);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
  return function(fare){
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers (driversArray, fn){
  return fn(driversArray);
}