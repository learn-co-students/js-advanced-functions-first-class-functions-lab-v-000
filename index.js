// Code your solution in this file!

const returnFirstTwoDrivers = (function(drivers){
    return drivers.slice(0,2)
})

const returnLastTwoDrivers = (function(drivers){
    return drivers.slice(drivers.length - 2)
})

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return function Calculator(fare) {
        return fare * num;
    }
}
 
const fareDoubler = createFareMultiplier(2);
 
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, functionToChoose) {
    return functionToChoose(drivers);
}


