// Code your solution in this file!

 // a variable with const that is assigned an anonymous function, assigned function accepts an array of drivers as an argument and returns the first two drivers in the array
 const returnFirstTwoDrivers = function (nonDestructiveDrivers) {
   return nonDestructiveDrivers.slice(0,2)
 }

 // Declare a variable with const that is assigned an anonymous function, assigned function accepts an array of drivers as an argument and returns the last two drivers in the array
 const returnLastTwoDrivers = function (nonDestructiveDrivers) {
   return nonDestructiveDrivers.slice(2);
 }

// array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers())
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// takes in one argument, an integer, and returns a function that will multiply a fare for a ride
function createFareMultiplier(integer) {
  return function (fare){return integer * fare;};
}

// this solution passes
// const createFareMultiplier = function(integer) {
//    return function(fare) {return fare *= integer};
//  }


// Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
const fareDoubler = createFareMultiplier(2);

 // triples it.
const fareTripler = createFareMultiplier(3);

// This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
function selectDifferentDrivers(drivers, selectingDrivers) {
  return selectingDrivers(drivers);
}
