const returnFirstTwoDrivers = 
  function(drivers) {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers =
  function(drivers) {
    return drivers.slice(drivers.length - 2) 
  }
  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = 
  function(multiply) {
    return function(fare) {
      return fare * multiply
    }
  
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, option) {
  return option(drivers)
}