const returnFirstTwoDrivers = function(array) {
  const firstTwo = array.slice(0,2);
  return firstTwo;
}

const returnLastTwoDrivers = function(array) {
  const lastTwo = array.slice(-2);
  return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
  return function(value){
    return multiplier*value
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(array, func) {
  return func(array)
}
