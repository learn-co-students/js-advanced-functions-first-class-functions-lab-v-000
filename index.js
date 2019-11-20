// Code your solution in this file!
// returnFirstTwoDrivers() — Declare a variable with const that is assigned an anonymous function.
// The assigned function should accept an array of drivers as an argument and return
// // the first two drivers in the array.
const returnFirstTwoDrivers = function(arr){
  return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr){
  return arr.slice(arr.length-2,arr.length-0)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


function createFareMultiplier(int){
   return function(fare){
     const fareQuintupler = fare * int
     return fareQuintupler
}
}


  const fareDoubler = createFareMultiplier(2)
  const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers,fx){
  if (fx === returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
    }
  else{
    return returnLastTwoDrivers(drivers)
  }
}
