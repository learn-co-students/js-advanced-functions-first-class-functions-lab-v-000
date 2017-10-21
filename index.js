const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}
// returnFirstTwoDrivers() — Declare a variable with
// const that is assigned an anonymous function.
// The assigned function should accept an array of drivers
// as an argument and return the first two drivers in
// the array.


const returnLastTwoDrivers = function(drivers){
  return drivers.slice(drivers.length-2, drivers.length);
}
// returnLastTwoDrivers() — Declare a variable with const
// that is assigned an anonymous function.
// The assigned function should accept an array of
// drivers as an argument and return the last two drivers
// in the array.

const selectingDrivers =
   [returnFirstTwoDrivers, returnLastTwoDrivers];
// selectingDrivers — This is an array containing two
// elements: the two functions that we previously
// defined (returnFirstTwoDrivers() and
// returnLastTwoDrivers()).

const createFareMultiplier = function(integer){
  return function(fare){
    return fare * integer;
  }
}
// createFareMultiplier() — This is a higher-order function
// that takes in one argument, an integer, and returns a
// function that will multiply a fare for a ride
// accordingly. If createFareMultiplier() receives an
// argument of 4, it will return a function that takes
// in a fare as an argument and quadruples the fare.

const fareDoubler = createFareMultiplier(2)
// fareDoubler() — Declare a variable with const and
// assign a function returned by createFareMultiplier()
// to it. Invoke createFareMultiplier() in such a way that
// the new fareDoubler() function accepts a fare as its
// lone argument and doubles it.

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers);
}
