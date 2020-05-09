// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    const firstDrivers = function() {
        return [drivers[0], drivers[1]];
    } 
    return firstDrivers();
}

function returnLastTwoDrivers(drivers) {
    const lastDrivers = function() {
        return [drivers[2], drivers[3]]
    }
    return lastDrivers();
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier() {
    return function(integer){
        return integer * integer
    };
}

const fareDoubler = function fareDoubler(integer) {
    return integer * 2
}

const fareTripler = function fareTripler(integer) {
    return integer * 3
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}