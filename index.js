
function returnFirstTwoDrivers(array) {
    const myFunc = function(array) {
        return array.slice(0,2)
    }
    return myFunc(array);
}

function returnLastTwoDrivers(array) {
    const myFunc = function(array) {
        return array.slice(-2)
    }
    return myFunc(array);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    const myFunc = (integer) => (fare) => integer * fare;
    return myFunc(integer);
}

function fareDoubler(fare) {
    const double = createFareMultiplier(2);
    return double(fare);
}

function fareTripler(fare) {
    const triple = createFareMultiplier(3);
    return triple(fare);
}

function selectDifferentDrivers(array, func) {
    return func(array);
}