// Code your solution in this file!
// const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(num){
  return function(){ return num * num};
  return createFareMultiplier(num)
}

function fareDoubler(fare){
  return fare * 2;
}

function fareTripler(fare){
  return fare * 3;
}

function fetchSpecifiedDrivers(drivers, func){
  return func(drivers);
}