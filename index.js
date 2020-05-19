// Code your solution in this file!
// Declare a variable with const that is assigned an anonymous function.
// The assigned function should accept an array of drivers as an argument
const returnFirstTwoDrivers = function (drivers) {
    // return the first two drivers in the array.
    return drivers.slice(0, 2);
}

// Declare a variable with const that is assigned an anonymous function. 
// The assigned function should accept an array of drivers as an argument
const returnLastTwoDrivers = function (drivers) {
    // return the last two drivers in the array.
    return drivers.slice(-2);
}

// This is an array containing two elements: 
// the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// This is a higher-order function that takes in one argument, an integer
const createFareMultiplier = function(integer) {
    // returns a function ...
    return function(integer) {
        // ... that will multiply a fare for a ride accordingly. 
        return integer * integer;
    }
}

// Declare a variable with const and assign a function returned by createFareMultiplier() to it.
// Invoke createFareMultiplier()
const fareDoubler = (function(num) {
    return (num) * 2;
});

// Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
const fareTripler = (function(num) {
    // Invoke createFareMultiplier() in such a way that
    //  the new fareTripler() function accepts a fare as its lone argument and triples it.
    return (num) * 3;
});

// This function takes two arguments, an array of drivers 
// and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function.
function fetchSpecifiedDrivers(drivers, f) {
    // Based on these two arguments, selectDifferentDrivers() will 
    // return either the first two drivers or the last two drivers.
    return f(drivers)
};

//function fetchSpecifiedDrivers(drivers, function) {
    //{function()}
//}
//function fetchSpecifiedDrivers(drivers, function()) {}

//function fetchSpecifiedDrivers(drivers, function) {}

//function fetchSpecifiedDrivers(drivers, selectingDrivers) {
    //if (returnFirstTwoDrivers) {returnFirstTwoDrivers(drivers);}
    //else {returnLastTwoDrivers(drivers);}
//}



//function fetchSpecifiedDrivers(drivers, function) {
    //if (returnFirstTwoDrivers) {returnFirstTwoDrivers(drivers);}
    //else {returnLastTwoDrivers(drivers);}
//}