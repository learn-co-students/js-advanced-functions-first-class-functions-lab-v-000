// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
  const newArray = []
  newArray.push(array[0])
  newArray.push(array[1])
  return newArray
}

const returnLastTwoDrivers = function(array){
  const newArray = []
  newArray.push(array[array.length - 2])
  newArray.push(array[array.length - 1])
  return newArray
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
  return function(fare){return fare * integer}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(array, eitherFunction){
  return eitherFunction(array)
}
