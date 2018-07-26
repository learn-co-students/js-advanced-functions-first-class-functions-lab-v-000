// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function (fare){
        return integer * fare;
    };
};

const fareDoubler = createFareMultiplier(2);
 /* 
THIS IS A FUNCTION BECAUSE IT INVOKES A FUNCTION. 
we do not need to actually invoke faredoubler. just define it is such a way than an invocation with a fare will return double the fare...
such as fareDoubler(fare);

----my OG SOLN-----
function fareDoubler(fare){
    const variable = createFareMultiplier(2);
    return variable(fare);
 }
 
*/

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, callback){
    return callback(drivers);
}