// Code your solution in this file!
function returnFirstTwoDrivers(driversArray) {
  return [ driversArray[0], driversArray[1] ]
};

function returnLastTwoDrivers(driversArray) {
  const size = driversArray.length
  return [ driversArray[size - 2], driversArray[size - 1] ]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(mult) {
  return function(fare) {
    return fare * mult
  }
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driversArray, fn) {
  return fn(driversArray)
}