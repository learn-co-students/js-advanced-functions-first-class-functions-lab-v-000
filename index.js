// Code your solution in this file!

const returnFirstTwoDrivers = (function (drivers) {
    return drivers.slice(0, 2);
});

const returnLastTwoDrivers = (function (drivers) {
    return drivers.slice(-2);
});

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (function (fare) {
    return (function (fare){
        return fare * fare;
    });
});

const fareDoubler = (function (fare){
    const multipledFare = createFareMultiplier(fare);
    return (multipledFare(fare)/fare) * 2;
});

const fareTripler = (function (fare){
    const multipledFare = createFareMultiplier(fare);
    return (multipledFare(fare)/fare) * 3;
});

const selectDifferentDrivers = (function (drivers, fn){
    return fn(drivers);
});