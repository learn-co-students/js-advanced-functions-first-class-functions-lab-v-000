// Code your solution in this file!

const returnFirstTwoDrivers = (function(element){
  return element.slice(0,2);
});

const returnLastTwoDrivers = (function(element){ return element.slice(-2);});

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
  return function(element){
    return element*integer;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers, returnLastTwoDrivers){
  return returnFirstTwoDrivers(arrayOfDrivers) || returnLastTwoDrivers(arrayOfDrivers);
}
