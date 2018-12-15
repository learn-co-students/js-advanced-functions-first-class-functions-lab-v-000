// // Code your solution in this file!
// function returnFirstTwoDrivers(array) {
//     const firstResults = (function(element) {
//         debugger;
//         return element;
//     })(array);
// }
const returnFirstTwoDrivers =  function(drivers) {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

const createFareMultiplier = function(multiplier) {
    return function(rate) {
        return multiplier * rate;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, fn) {
    return fn(drivers);
}