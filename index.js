// Code your solution in this file!

//returnFirstTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers
//as an argument and return the first two drivers in the array.
//should return a new array containing the first two drivers
// from the passed-in array

const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
};
  //returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers
  //as an argument and return the last two drivers in the
  //array.

  //should be assigned to a constant
  const returnLastTwoDrivers = function (array) {
   return array.slice(array.length - 2, array.length);
  };

//selectingDrivers — This is an array containing two elements: the two functions that we previously defined
//(returnFirstTwoDrivers() and returnLastTwoDrivers()).
//has the `returnFirstTwoDrivers` function to as its first element

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If createFareMultiplier() receives an argument of 4, it will return a function that
//takes in a fare as an argument and quadruples the fare.
//returns a function
const createFareMultiplier = function (multiplier) {
  return function (fare) {
  return multiplier * fare;
 };
};

//fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
//Invoke createFareMultiplier() in such a way that the new fareDoubler() function
//accepts a fare as its lone argument and doubles it.
//doubles fares
const fareDoubler = createFareMultiplier(2);

//fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
// Invoke createFareMultiplier() in such a way that the new fareTripler() function
//accepts a fare as its lone argument and triples it.
//s a function

//ReferenceError: 'fareTripler' is not defined
  // at Anonymous function (test/indexTest.js:72:7)
//triples fares

//ReferenceError: 'fareTripler' is not defined
// at Anonymous function (test/indexTest.js:76:7)

const fareTripler = createFareMultiplier(3);

//selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return
//either the first two drivers or the last two drivers.
//returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//returns the last two drivers when passed returnLastTwoDrivers() as the second argument

const selectDifferentDrivers = function (array,list) {
  return list(array);
};
