const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);}
  
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(2, 4);}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
  
const createFareMultiplier = function(fare) {
    return function(multiplier) {
      return fare*multiplier;}
}

const fareDoubler = createFareMultiplier(2);
fareDoubler();
  
const fareTripler = createFareMultiplier(3);
fareTripler();

function fetchSpecifiedDrivers(drivers, fName) {
  return fName(drivers);
}