const returnFirstTwoDrivers = function(arrayOfDrivers) {
    return arrayOfDrivers.slice(0, 2)
}

const returnLastTwoDrivers = function(arrayOfDrivers) {
    return arrayOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(mulitplier) {
    return function(fare) {
        return fare * mulitplier
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

const selectDifferentDrivers = function(drivers, selectedDrivers) {
    return selectedDrivers(drivers);
}