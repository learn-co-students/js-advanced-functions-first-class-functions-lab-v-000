// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers){

  const firstTwo = [drivers[0], drivers[1]]
  return firstTwo
}

const returnLastTwoDrivers= function(drivers){
  const lastTwo = drivers.slice(-2)
  return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(integer){
  return function(num){
    return num * integer
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, func){
  return func(drivers)
}
