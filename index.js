
const returnFirstTwoDrivers = function first(array){
  return [array[0], array[1]];
};

const returnLastTwoDrivers = function first(array){
  return [array[array.length - 2], array[array.length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function third(num){
  return function fourth(num){
    return (num * 5);
  };
};

const fareDoubler = function fifth(num){
  return (num * 2);
};

const fareTripler = function sixth(num){
  return (num * 3);
};

const fetchSpecifiedDrivers = function seventh(array, fn){
  return fn(array);
};