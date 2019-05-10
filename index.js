// Code your solution in this file!
const returnFirstTwoDrivers = (drivers => {return drivers.slice(0,2)});
const returnLastTwoDrivers = (drivers => {return drivers.slice(-2)});
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function createFareMultiplier(input){
  return function(amount){
    return amount * input;
  };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function (arg1, arg2){
  return arg2(arg1);
};
