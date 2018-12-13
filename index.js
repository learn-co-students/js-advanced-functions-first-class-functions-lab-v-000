// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function(drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length -1]];
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

// const createFareMultiplier() = function() {
//
// }
const createFareMultiplier = function(multiplier) {
    return function(num) {
        return num * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function(arrayOfDrivers, func) {
  return func(arrayOfDrivers);
}
