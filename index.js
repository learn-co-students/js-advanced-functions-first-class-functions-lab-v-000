// Code your solution in this file!
const returnFirstTwoDrivers = function(collection){
    return collection.slice(0,2)
}


const returnLastTwoDrivers = function(collection){
    return collection.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(int){return int * int}
}

function fareDoubler(int){
    return int * 2
}

function fareTripler(int){
    return int * 3
}

function selectDifferentDrivers(collection, cb){
    return cb(collection)
}