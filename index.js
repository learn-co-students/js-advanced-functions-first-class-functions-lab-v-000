// Code your solution in this file!
const returnFirstTwoDrivers = function(list){
  return list.slice(0,2);
};

const returnLastTwoDrivers = function(list){
  return list.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
  return function(fair){
    return multiplier * fair;
  };
};

const fareDoubler = function(fair){
  return createFareMultiplier(2)(fair);
};

const fareTripler = function(fair){
  return createFareMultiplier(3)(fair);
};

function selectDifferentDrivers(list, func){
  return func(list);
}
