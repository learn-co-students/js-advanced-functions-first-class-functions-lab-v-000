// Code your solution in this file!
// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    let array = [];
    array.push(drivers[0]);
    array.push(drivers[1]);
    return array;
};
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length - 2)
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(int){
  return function(fare){
    return fare * int;
  };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(driver, func){
  return func(driver);
};
