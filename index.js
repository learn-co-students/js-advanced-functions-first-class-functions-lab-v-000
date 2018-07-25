// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {
  const firstTwo = function(drivers) {return [drivers[0], drivers[1]]};
  return firstTwo();
}

function returnLastTwoDrivers(drivers) {
  const lastTwo = function(drivers){ return [drivers[-2], drivers[-1]]};
  return lastTwo();
}

function selectingDrivers() {
  return [returnFirstTwoDrivers(), returnLastTwoDrivers()];
}

function createFareMultiplier(multiplier) {
  return function(fare){ fare * multiplier};
}

function fareDoubler(fare) {
  const doubler = createFareMultiplier(2)()
  return doubler;
}