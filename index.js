// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return [
        array[0], array[1]
    ]
}

const returnLastTwoDrivers = function(array) {
    const len = array.length
    return [
        array[len-2], array[len-1]
    ]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
       return fare * int
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, returnDrivers) {
    return returnDrivers(array)
}