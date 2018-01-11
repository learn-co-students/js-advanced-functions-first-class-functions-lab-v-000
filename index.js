// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
    return function (multiplier) {
        return multiplier * multiplier
    }
}

function fareDoubler(fare) {
    return fare + fare
}

function fareTripler(fare) {
    return fare * 3 
}

function selectDifferentDrivers(drivers, func){
    return func(drivers)
}