// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
      let arr = [];
      arr.push(drivers[0])
      arr.push(drivers[1])

  return arr;

}
const returnLastTwoDrivers = function (drivers){
  let arr = [];
  arr.push(drivers[drivers.length-2])
  arr.push(drivers[drivers.length-1])

  return arr;
}
selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(integer){
  return function(fare){
    return fare*integer
  }

}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(arrayOfDrivers, x ){
  return x(arrayOfDrivers)

}
