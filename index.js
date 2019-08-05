function returnFirstTwoDrivers(arr){
    return arr.slice(0,2);
}

function returnLastTwoDrivers(arr){
    return arr.slice(arr.length - 2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function(fare){
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = function(driversArray, selectingDrivers){
    return selectingDrivers(driversArray);    
}