// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplyV){
    return function(int) {
        return int * multiplyV;
    };
};

const fareDoubler = function(fare){
    return createFareMultiplier(fare)(2);
};

const fareTripler = function(fare){
    return createFareMultiplier(fare)(3);
};

const selectDifferentDrivers = function(drivers, returnDriverFunc){
    return returnDriverFunc(drivers)
};