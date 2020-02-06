// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
  return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr){
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier){
  return function(fare){
    return multiplier * fare
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, selection){
  return selection(drivers)
}
