const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

const selectingDrivers = [
     returnFirstTwoDrivers,
     returnLastTwoDrivers
]

const createFareMultiplier = function(num){
    return function(fare){
        return fare * num;
    };
};

const fareDoubler = function createFareMultiplier(num){
    return num * 2;
};

const fareTripler = function createFareMultiplier(num){
    return num * 3;
};

const fetchSpecifiedDrivers = function(drivers, func){
    return func(drivers);
};