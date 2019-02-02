// Code your solution in this file!
const returnFirstTwoDrivers = function(collection) {
        return collection.slice(0,2);
    }

const returnLastTwoDrivers = function(collection) {
        return collection.slice(-2);
    }

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

// HOW DO THE FOLLOWING TWO TESTS WORK WITH CONSTANTS? 

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}

function fetchSpecifiedDrivers(arrayOfDrivers, fcn){
    if (fcn === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    } else {
        return returnLastTwoDrivers(arrayOfDrivers);
    };
}