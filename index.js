// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    let newDrivers = [];
    newDrivers.push(drivers[0], drivers[1])
    return newDrivers;
};

const returnLastTwoDrivers = function(drivers) {
    let newDrivers = [];
    newDrivers.push(drivers[drivers.length-2], drivers[drivers.length-1])
    return newDrivers;
};

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

function createFareMultiplier(mult) {
    return function(fare) {
        return fare * mult;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function (drivers, f) {
    return f(drivers);
    //if (f == returnFirstTwoDrivers){
        //return returnFirstTwoDrivers(drivers);
    //} else {
        //return returnLastTwoDrivers(drivers);
    //}
}