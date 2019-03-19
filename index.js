const returnFirstTwoDrivers = function(drivers) {
  return [drivers[0], drivers[1]];

}


const returnLastTwoDrivers= function(drivers) {
  return [drivers[drivers.length-2], drivers[drivers.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  const multiplier = int;
  return function(fare) {
    return multiplier*fare;
  }
}

function fareDoubler(fare) {
  const doubler =  createFareMultiplier(2);
  return doubler(fare);
}

function fareTripler(fare) {
  const tripler = createFareMultiplier(3);
  return tripler(fare);
}

function fetchSpecifiedDrivers(drivers, fn) {
  return fn(drivers);
}
