// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer) {
    return function(integer) {
        return integer * integer;
    }
}

const fareDoubler = (function(num) {
    return (num) * 2;
});

const fareTripler = (function(num) {
    return (num) * 3;
});


function fetchSpecifiedDrivers(drivers, f) {
    return f(drivers)
};

//function fetchSpecifiedDrivers(drivers, function) {
    //{function()}
//}
//function fetchSpecifiedDrivers(drivers, function()) {}

//function fetchSpecifiedDrivers(drivers, function) {}

//function fetchSpecifiedDrivers(drivers, selectingDrivers) {
    //if (returnFirstTwoDrivers) {returnFirstTwoDrivers(drivers);}
    //else {returnLastTwoDrivers(drivers);}
//}



//function fetchSpecifiedDrivers(drivers, function) {
    //if (returnFirstTwoDrivers) {returnFirstTwoDrivers(drivers);}
    //else {returnLastTwoDrivers(drivers);}
//}