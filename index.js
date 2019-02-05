// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(i) {
  return function(fare){return fare * i}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(a, f){
    if (f === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(a);
    } else {
        return returnLastTwoDrivers(a);
    };
}
