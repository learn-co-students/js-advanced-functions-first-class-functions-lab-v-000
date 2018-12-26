const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

var selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
] 

const createFareMultiplier = function (mult) {
    return function (total) { 
        return mult * total;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}