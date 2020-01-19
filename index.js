// should return a new array containing the first two drivers from the passed-in array
// 'should be assigned to a constant'

const returnFirstTwoDrivers = function(drivers) {
  firstTwo = drivers.slice(0,2)
  return  firstTwo;
};

// should return an array of the last two drivers
// should be assigned to a constant

const returnLastTwoDrivers = function(drivers) {
  lastTwo = drivers.slice(-2)
  return  lastTwo;
};


// has the `returnFirstTwoDrivers` function to as its first element
// has the `returnLastTwoDrivers` function to as its last element
// allows us to invoke either function from the array

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];


// returns a function
// // should multiply a given value using the created multiplier
// higher-order function

function createFareMultiplier(i) {
      return function fareQuintupler(x) {
          return x * i
  }
};

// is a function
// doubles fares

const fareDoubler =  function createFareMultiplier(i) {
  return i * 2
};

// is a function
// triples fares

const fareTripler = function createFareMultiplier(i) {
  return i * 3
};

// returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// returns the last two drivers when passed returnLastTwoDrivers() as the second argument

function fetchSpecifiedDrivers(drivers, returnLastTwoDrivers) {

  return returnLastTwoDrivers(drivers)

}


// function fetchSpecifiedDrivers(drivers, returnFirstTwoDrivers) {
//
//   return returnFirstTwoDrivers(drivers)
//
// }
