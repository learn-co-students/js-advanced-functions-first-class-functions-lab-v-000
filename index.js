// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
  var firstTwo = []
  for(let i = 0; i < 2; i++){
    firstTwo.push(drivers[i])
  }
  return firstTwo
}

const returnLastTwoDrivers = (drivers) => {
  var lastTwo = []
  for(let i = drivers.length - 2; i < drivers.length; i++){
    lastTwo.push(drivers[i])
  }
  return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
  return function(fare){
    return (fare * int)
  }
}

const fareDoubler = createFareMultiplier(2)
  
const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = (drivers,fn) => {
  return fn(drivers)
}