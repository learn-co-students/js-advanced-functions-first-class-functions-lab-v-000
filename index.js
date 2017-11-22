// Code your solution in this file!
const returnFirstTwoDrivers = function (arr){    
    let first = []
    first.push(arr[0])
    first.push(arr[1])
    return first
}

const returnLastTwoDrivers = function (arr) {
    let index = arr.length - 1
    let last = []
    last.push(arr[index - 1])
    last.push(arr[index])
    return last
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    const fareMultiplier = function(fare){
        return multiplier * fare
    }
    return fareMultiplier
}

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare){
    return fare * 3
}

function selectDifferentDrivers(arrayOfDrivers, callbackFunction) {
    return callbackFunction(arrayOfDrivers)
}