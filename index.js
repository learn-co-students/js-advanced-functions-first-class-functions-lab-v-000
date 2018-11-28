// Code your solution in this file!

const returnFirstTwoDrivers = (function (drivers) {
  return [drivers[0], drivers[1]];
}) 
  
const returnLastTwoDrivers = (function (drivers) {
  return drivers.slice(-2);
})

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (fare) {
  return function (multiply) {
    return fare*multiply;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function (array, selectedFunction) {
  return selectedFunction(array);
}

