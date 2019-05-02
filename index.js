// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  firstTwoDrivers = [];
  firstTwoDrivers.push(drivers[0]);
  firstTwoDrivers.push(drivers[1]);
  return firstTwoDrivers;
}

const returnLastTwoDrivers = function(drivers){
  lastTwoDrivers = [];
  lastTwoDrivers.push(drivers[drivers.length -2]);
  lastTwoDrivers.push(drivers[drivers.length -1]);
  return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(num) {

  const fareMultiplier = function (num2) {
    return num*num2;
  }

  return fareMultiplier;
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(returnFirstTwoDrivers, funct) {
  return funct(returnFirstTwoDrivers);
}