// Code your solution in this file!
const returnFirstTwoDrivers= function(drivers){
  const array= []
  array.push(drivers[0])
  array.push(drivers[1])
  return array
}
const returnLastTwoDrivers= function(drivers){
  const array= []
  array.push(drivers[drivers.length-2])
  array.push(drivers[drivers.length-1])
  return array
}
const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(int){
  return function(fare){
    return fare * int
  }
}
const fareDoubler= createFareMultiplier(2)
const fareTripler= createFareMultiplier(3)
function selectDifferentDrivers(drivers,func){
  return func(drivers)
}
