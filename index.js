// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray) {
  const newArray = driversArray;
   return newArray.slice(0,2);
}

const returnLastTwoDrivers = function(driversArray) {
  const newArray = driversArray;
  return newArray.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (num) {
    return (function (fare) {
        return num * fare;
    })
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function (arrayOfDrivers, eitherDrivers) {
    return eitherDrivers(arrayOfDrivers);
}
