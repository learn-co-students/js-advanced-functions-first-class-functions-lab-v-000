// Code your solution in this file!
function returnFirstTwoDrivers(ary){
  return [ary[0], ary[1]]
}

function returnLastTwoDrivers(ary){
  return [ary[ary.length-2], ary[ary.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
  return function(fare){return int*fare}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(ary, funct){
  return funct(ary)
}
