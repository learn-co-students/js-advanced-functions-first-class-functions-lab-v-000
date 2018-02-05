// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
  return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array){
  return array.slice(array.length - 2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(value){
  return function(multiplier){
    return value * multiplier
  }
}

function fareDoubler(fare){
  return createFareMultiplier(fare)(2)
}

function fareTripler(fare){
  return createFareMultiplier(fare)(3)
}

function selectDifferentDrivers(arrayOfDrivers, fc){
  return fc(arrayOfDrivers)
}