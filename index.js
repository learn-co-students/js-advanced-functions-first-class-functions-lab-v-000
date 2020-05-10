// Code your solution in this file!
const returnFirstTwoDrivers= function(drivers) {
    const firstTwo = [drivers[0],drivers[1]]
    return firstTwo
    }

const returnLastTwoDrivers= function(drivers) {
    const lastTwo = drivers.slice(-2)
    return lastTwo

    }

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(fare) {
        return fare * int
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, choices){
    //choices is eiterh returnFristtwodrivers() or lasttwodrivers()
    //pass drivers as argument
    return choices(drivers)
}
