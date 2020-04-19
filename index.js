// Code your solution in this file!
function returnFirstTwoDrivers(array) {
    const f = function(array) {
        return [array[0], array[1]]
    }
    return f(array)
}

function returnLastTwoDrivers(array) {
    const f = function(array) {
       let newarray = array.slice(array.length-2);
        return newarray
    }
    return f(array)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function f(fare) {
        return fare*int
    }
}

function fareDoubler(fare) {
    const fareCost = createFareMultiplier(2)(fare)
    return fareCost;
}

function fareTripler(fare) {
    const fareCost = createFareMultiplier(3)(fare)
    return fareCost;
}

function selectDifferentDrivers(drivers, f) {
   return f(drivers)
}