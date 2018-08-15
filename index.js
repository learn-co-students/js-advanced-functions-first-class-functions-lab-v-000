// Code your solution in this file!
const returnFirstTwoDrivers = function (list){
  return list.slice(0,2);
};


const returnLastTwoDrivers = function(list){
  return list.slice(list.length-2);
};


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier){
  return function(toll){
    return toll * multiplier
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, selectingDrivers){
  return selectingDrivers(drivers)
}
