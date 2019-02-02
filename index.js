// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.filter(driver => driver === drivers[0] || driver === drivers[1]);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.filter(driver => driver === drivers[drivers.length-2] || driver === drivers[drivers.length-1]);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
    return function(num) {
        return num * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(array, fn) {
    return fn(array);
}