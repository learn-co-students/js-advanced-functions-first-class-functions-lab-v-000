// Code your solution in this file!
//returns a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = function (arrOfDriverObjs){
  return arrOfDriverObjs.slice(0, 2);
}

//returns an array of the last two drivers
const returnLastTwoDrivers = function (arrOfDriverObjs){
  return arrOfDriverObjs.slice(-2);
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier){
  return function (fare) {
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(arrOfDriverObjs, f){
  return f(arrOfDriverObjs);
}