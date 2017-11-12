
// returnFirstTwoDrivers() — Declare a variable with const that is assigned an
// anonymous function. The assigned function should accept an array of drivers as an argument and
//return the first two drivers in the array.

const returnFirstTwoDrivers =  function (drivers) {
  return drivers.slice (0, 2);
};

//returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function.
// The assigned function should accept an array of drivers as an argument and return the
// last two drivers in the array.//

const returnLastTwoDrivers = function lasttwo (drivers) {
  return drivers.slice (2, 4);
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];


const createFareMultiplier = function (multiplier) {
  return function (num) {
    return multiplier * num;
  };
};


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, myDrivers) {
  return myDrivers(drivers);
};
