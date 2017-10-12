// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  return array.slice(0,2)
}

const returnLastTwoDrivers = function (array) {
  return array.slice(-2, array.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function(value) {return integer * value}
}

const fareDoubler = createFareMultiplier(2) 
 


const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(array, DriversFunction) {
  return DriversFunction(array)
}