// assigning functions to variables

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2); 
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// an array containing two above functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
    // returns a function that will multiply a fare for a ride accordingly
    return function(fareRate) {
        return integer * fareRate;
    };
};

// assign a function returned by createFareMultiplier()
// this function accepts a fare as its lone argument and doubles the rate
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(drivers, specifiedDrivers) {
    return specifiedDrivers(drivers);
};