// Code your solution in this file!

 // a variable with const that is assigned an anonymous function, assigned function accepts an array of drivers as an argument and returns the first two drivers in the array

 const returnFirstTwoDrivers = function (nonDestructiveDrivers) {
   return nonDestructiveDrivers.slice(0,2)
 }
returnFirstTwoDrivers;

 // Declare a variable with const that is assigned an anonymous function, assigned function accepts an array of drivers as an argument and returns the last two drivers in the array

 const returnLastTwoDrivers = function (nonDestructiveDrivers) {
   return nonDestructiveDrivers.slice(2)
 }
 returnLastTwoDrivers;

// array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
selectingDrivers;

// takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.
const createFareMultiplier = function(integer) {
   return function(fare) {return fare *= integer}
 }
createFareMultiplier;
