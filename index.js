// Code your solution in this file!
const returnFirstTwoDrivers = function(collection) {
    return collection.slice(0, 2);
}

const returnLastTwoDrivers = function(collection) {
    return collection.slice(-2);
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(mult){
    return function(fare){ return fare * mult};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(arrayOfDrivers, list){
    return list(arrayOfDrivers);
}