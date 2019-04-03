

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
}


const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(2);
}

 const selectingDrivers = [
   returnFirstTwoDrivers,
   returnLastTwoDrivers
 ];

function createFareMultiplier(num) {
  return function (fare) {
    return fare * num
  };
};


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

// `fetchSpecifiedDrivers()` — This function takes two arguments, an array of `drivers` and either
// the `returnFirstTwoDrivers()` or `returnLastTwoDrivers()` function. Based on these two arguments,
// `fetchSpecifiedDrivers()` will return either the first two drivers or the last two drivers.

function fetchSpecifiedDrivers(drivers, fn) {
  return fn(drivers);
}
