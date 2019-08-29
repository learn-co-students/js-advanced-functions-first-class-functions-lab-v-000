// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    let firstTwoDrivers = [];
    firstTwoDrivers.push(drivers[0]);
    firstTwoDrivers.push(drivers[1]);
    return firstTwoDrivers 
};

function returnLastTwoDrivers(drivers) {
    let lastTwoDrivers = drivers.slice(-2);
    return lastTwoDrivers;
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(factor) {
    return function(number) {
        return factor * number;
    };
};

function fareDoubler (fare) {
    let doubler = createFareMultiplier(2);
    return doubler(fare);
};

function fareTripler(fare) {
    let tripler = createFareMultiplier(3);
    return tripler(fare);
};

function selectDifferentDrivers(arrayOfDrivers, functionToCall) {
    return functionToCall(arrayOfDrivers);
};