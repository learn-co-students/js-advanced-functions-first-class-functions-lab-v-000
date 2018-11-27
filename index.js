// Code your solution in this file!

const driver = ["Sally", "Bob", "Freddy", "Claudia"];

const returnFirstTwoDrivers = function () {
    return driver.slice(0, 2);
}

const returnLastTwoDrivers = function () {
    return driver.slice(-2);
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyNum) {
    return function (num) {
        return multiplyNum * num;
    }
};

const fareDoubler = (createFareMultiplier(2));

const fareTripler = (createFareMultiplier(3));

const fetchSpecifiedDrivers = function (driver, specifiedDriver) {
    return specifiedDriver(driver);
};
