// Code your solution in this file!
const returnFirstTwoDrivers = function (driverArray){
  let firstTwoDrivers = []
  firstTwoDrivers = [driverArray[0], driverArray[1]];
  return firstTwoDrivers
}

const returnLastTwoDrivers = function (driverArray){
  let lastTwoDrivers = []
  lastTwoDrivers = [driverArray[driverArray.length-2], driverArray[driverArray.length - 1]];
  return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(value){
  return function(increaseFactor){
    return value * increaseFactor
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

// driver type is a called upon function previously defined while drivers is an array
const fetchSpecifiedDrivers = function (drivers, driverType){
  return driverType(drivers)
}
