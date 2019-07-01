// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
};



//selectingDrivers — This is an array containing two elements: the two functions
// that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).

const selectingDrivers = [ returnFirstTwoDrivers,returnLastTwoDrivers ];

//fareDoubler() — Declare a variable with const and assign a function returned by
// createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that
//the new fareDoubler() function accepts a fare as its lone argument and doubles it.


const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};




//fetchSpecifiedDrivers() — This function takes two arguments, an array of drivers
//and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function.
//Based on these two arguments, fetchSpecifiedDrivers() will return either the
//first two drivers or the last two drivers.
