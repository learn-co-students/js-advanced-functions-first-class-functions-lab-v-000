// Code your solution in this file!
const returnFirstTwoDrivers = function (data){
  return data.slice(0,2);
}
const returnLastTwoDrivers = function(data){
  return data.slice(data.length - 2, data.length)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
  return function(n){return n * n;};
}

const fareDoubler = function (fare){
  return (fare * 2);
}

const fareTripler = function (fare){
  return (fare * 3);
}

function selectDifferentDrivers(data, funct){
  return funct(data);
}
