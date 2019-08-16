// Code your solution in this file!
const returnFirstTwoDrivers = function (collection) {
    return collection.slice(0, 2);
}
const returnLastTwoDrivers = function (collection) {
    return collection.slice (-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
    return function (fare) { return fare * number };
}

function fareDoubler(fare) {
    return createFareMultiplier (2) (fare);
}

function fareTripler(fare) {
    return createFareMultiplier (3) (fare);
}

function selectDifferentDrivers(arrayOfDrivers, cb) {
    return cb(arrayOfDrivers);
}
