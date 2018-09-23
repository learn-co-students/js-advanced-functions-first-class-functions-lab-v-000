// Code your solution in this file!
const returnFirstTwoDrivers = function first2(array){
  return [array[0], array[1]];
}

const returnLastTwoDrivers = function last2(array){
  return [array[array.length - 2], array[array.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
  return function multiplier(int) {
    return fare * int;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(array, funct) {
  return funct(array);
}
