// Code your solution in this file!
// Return a new array containing the first two drivers from the passed-in array
// Can I split the array to only show the frist two positions?
// Using splice alters the existing array, I need to create a new array.
// Is there a method I can use to remove elements from an array and create a new array?
// THe test wants to the new array saved to a const
// The const should be named returnFirstTwoDrivers
// Do we want return first two drivers to be a function? - I need to create an annonymous function
// Don't use .splice, it's destructive
const returnFirstTwoDrivers = (function(list) {return list.slice(0,2)});

// Return an array of the last two drivers
// .slice((list.lenth-2, list.length -1))
// .slice(-2) instead of the above line
const returnLastTwoDrivers = function(list) {return list.slice(-2)};


// How do I even create this?
// This is an array with the two functions above as elements
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Takes in an integer argument
// Returns a function that will multiply the fair of a ride
// Is my functions return grabbing my multiplir variable?
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// declare a variable with const
// assign a function returned by createFareMultiplier()
// fareDoubler accepts a fare as it's lone argument
const fareDoubler = createFareMultiplier(2);

// define a variable with const
// assign a function returned by createFareMultiplier()
// create a function where fareTripler accepts a fare as it's lone argument
const fareTripler = createFareMultiplier(3);

// the function takes two arguments
// an array of drivers and either returnLastTwoDrivers or returnLastTwoDrivers are the argumnets
// selectDifferentDrivers()
function selectDifferentDrivers(drivers, selectingDrivers) {
  return selectingDrivers(drivers);
};
