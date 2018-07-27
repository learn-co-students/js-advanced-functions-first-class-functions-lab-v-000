// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  newArray = array.slice(0, 2)
  return newArray
};


const returnLastTwoDrivers = function (array) {
  newArray = array.slice(-2)
  return newArray
};

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

const createFareMultiplier = function (number) {
  return function (fare) {
    return fare * 5
  }
}

function fareDoubler(fare) {
  return fare * 2
}

function fareTripler(fare) {
  return fare * 3
}


function selectDifferentDrivers(drivers, returnDrivers) {
  return returnDrivers(drivers)
}
