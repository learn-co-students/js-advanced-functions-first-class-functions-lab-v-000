// Code your solution in this file!
// https://learn.co/tracks/full-stack-web-development-v8/module-14-front-end-web-programming-in-javascript/section-9-advanced-function-usage/js-advanced-functions-first-class-functions-lab
// Declare a variable with const that is assigned an anonymous function
// The assigned function should accept an array of drivers as an argument...
const returnFirstTwoDrivers = function(myArrayOfDrivers) {
  // ...and return the first two drivers in the array
  return myArrayOfDrivers.slice(0, 2);
};

// Declare a variable with const that is assigned an anonymous function.
// The assigned function should accept an array of drivers as an argument...
const returnLastTwoDrivers = function(myOtherArrayOfDrivers) {
  // and return the last two drivers in the array.
  return myOtherArrayOfDrivers.slice(-2);
};

// This is an array containing two elements: the two functions that we
// previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers())
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// This is a higher-order function that takes in one argument, an integer,
// and returns a function that will multiply a fare for a ride accordingly.
const createFareMultiplier = function(timesAmt) {
  return function (fare) {
    return timesAmt * fare;
  };
};

//  Declare a variable with const and assign a function returned by
// createFareMultiplier() to it. Invoke createFareMultiplier() in such a way
// that the new fareDoubler() function accepts a fare as its lone argument and
// doubles it. (2)
const fareDoubler = createFareMultiplier(2);

// Declare a variable with const and assign a function returned by
// createFareMultiplier() to it. Invoke createFareMultiplier() in such a way
// that the new fareTripler() function accepts a fare as its lone argument and
// triples it. (3)
const fareTripler = createFareMultiplier(3);

// This function takes two arguments, an array of drivers and either the
// returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these
// two arguments, selectDifferentDrivers() will ...
const selectDifferentDrivers = function(anArrayOfDrivers, firstOrLastTwoDrivers) {
  // return either the first two drivers or the last two drivers.
  return firstOrLastTwoDrivers(anArrayOfDrivers);
};
