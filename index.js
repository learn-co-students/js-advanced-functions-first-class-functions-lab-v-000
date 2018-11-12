// Code your solution in this file!
const returnFirstTwoDrivers = function (driver) {
    return driver.slice(0, 2)
}

const returnLastTwoDrivers = function (driver) {
    return driver.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    return function (fare) {
        return (fare * multiplier)
    };
};

const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function (fare) {
    return createFareMultiplier(3)(fare)
}

const fetchSpecifiedDrivers = function (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}




// const fareDoubler = 











// const myFunc = function () {
//     return 6 + 9;
//    };