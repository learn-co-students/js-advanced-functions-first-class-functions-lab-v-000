//should return a new array containing the first two drivers from the passed-in array ‣
//should be assigned to a constant
const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
};

//should return an array of the last two drivers ‣
//should be assigned to a constant
const returnLastTwoDrivers = function (array) {
  return array.slice(array.length - 2, array.length);;
};

//has the `returnFirstTwoDrivers` function to as its first element
//has the `returnLastTwoDrivers` function to as its last element
//allows us to invoke either function from the array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//returns a function ‣
//should multiply a given value using the created multiplier
const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return multiplier * fare;
  };
};

//is a function and doubles fares
const fareDoubler = createFareMultiplier(2);

//is a function and triples fares
const fareTripler = createFareMultiplier(3);

//returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//returns the last two drivers when passed returnLastTwoDrivers() as the second argument
const selectDifferentDrivers = function (array,list) {
  return list(array);
};
