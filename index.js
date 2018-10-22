const returnFirstTwoDrivers = function(list) {
    return list.slice(0,2);
};

const returnLastTwoDrivers = function(list){
    return list.slice(-2);
};

const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
];

const createFareMultiplier = function(num){
    return function(value){
        return num * value;
    };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(list, whichFunc){
    return whichFunc(list);
};