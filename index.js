// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayDrivers) {
    return arrayDrivers.slice(0, 2)
}

const returnLastTwoDrivers = function(arrayDrivers) {
    return arrayDrivers.slice(arrayDrivers.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(someNumber){
    
    return function(fare){
        return (fare * someNumber)
    }
    
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(arrayDrivers, functionChosen) {
    return functionChosen(arrayDrivers)
}
