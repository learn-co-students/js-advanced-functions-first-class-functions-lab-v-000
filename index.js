// Code your solution in this file!

const returnFirstTwoDrivers = function(array_of_drivers) {
    let newArray = [];
    newArray.push(array_of_drivers[0]);
    newArray.push(array_of_drivers[1]);
    return newArray;

}

const returnLastTwoDrivers = function(array_of_drivers) {
  let newArray = [];
  newArray.push(array_of_drivers[array_of_drivers.length-2]);
  newArray.push(array_of_drivers[array_of_drivers.length-1]);
  return newArray;
}


function createFareMultiplier(integer) {
    return function(fare) {
        return fare*integer;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(fare)(2);
}

const fareTripler = function(fare) {
  return createFareMultiplier(fare)(3);
}

function selectDifferentDrivers(array_of_drivers, drivers) {
  return drivers(array_of_drivers);
}

let selectingDrivers = [];
selectingDrivers.push(returnFirstTwoDrivers)
selectingDrivers.push(returnLastTwoDrivers);