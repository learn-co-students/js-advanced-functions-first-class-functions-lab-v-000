// Code your solution in this file!
const returnFirstTwoDrivers = function (someArray) {
  return firstTwo = [someArray[0], someArray[1]];
}

const returnLastTwoDrivers = function (someArray){
  return lastTwo = [someArray[someArray.length-2], someArray[someArray.length-1]];
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (fare){
  return function (multiBy){
    return fare*multiBy;
  };
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


const fetchSpecifiedDrivers = function (someArray, someFunction){
  return someFunction(someArray);
}
