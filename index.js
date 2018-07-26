// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(integer){
    return function (fare){
        return integer * fare;
    }
}



function fareDoubler(fare){
    const variable = createFareMultiplier(2);
    return variable(fare);
 }
 
 /* ----LESS INTUITIVE SOLN-----
function fareDoubler(fare){
   const variable = createFareMultiplier(2)(fare);
   return variable;
}
*/


function fareTripler(fare){
    const variable = createFareMultiplier(3);
    return variable(fare);
 }
 
function selectDifferentDrivers(drivers, cb){
    return cb(drivers);
}