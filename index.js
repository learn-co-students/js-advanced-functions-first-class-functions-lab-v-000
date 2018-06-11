// Code your solution in this file!

const returnFirstTwoDrivers = (arr =>  arr.slice(0,2));

const returnLastTwoDrivers = (arr => arr.slice(-2));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    return function (num){
        return multiplier * num;
        };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr, fn){
    return fn(arr);
}