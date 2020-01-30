// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
    return arr.slice(0,2);
}

function returnLastTwoDrivers(arr) {
    return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(value) {
        return multiplier * value;
    }
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arr, fn) {
    return fn(arr);
}