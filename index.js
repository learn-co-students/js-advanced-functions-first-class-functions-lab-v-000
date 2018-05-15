// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
  // debugger
  return drivers.slice(0,2).map(function(driver){return driver})
}
const returnLastTwoDrivers = function(drivers){
  // debugger
  return drivers.slice(-2).map(function(driver){return driver})
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(num){
  // debugger
  return function(num){return num * num}
}

const fareDoubler = function(fare){
  return fare * 2
}
const fareTripler = function(fare){
  return fare * 3
}
const selectDifferentDrivers = function(drivers,fn){
  return fn(drivers)
}
