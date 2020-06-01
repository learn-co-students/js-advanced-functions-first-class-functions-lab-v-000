
const returnFirstTwoDrivers = function(arrayOfDrivers){
    let newArray = [arrayOfDrivers[0], arrayOfDrivers[1]];
    return newArray;
}

const returnLastTwoDrivers = function(arrayOfDrivers){
    let newArray = arrayOfDrivers.slice(-2);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer) {
    return function (fare){
        return fare * integer
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, aFunction){
    return aFunction(arrayOfDrivers)
}

