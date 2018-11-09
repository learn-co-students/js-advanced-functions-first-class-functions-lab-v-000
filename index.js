// Code your solution in this file!
const returnFirstTwoDrivers = function (arrayOfDrivers) {
  const firstTwo = [arrayOfDrivers[0], arrayOfDrivers[1]];
  return firstTwo;
}
 const returnLastTwoDrivers = function (arrayOfDrivers) {
  const lastTwo = [arrayOfDrivers[arrayOfDrivers.length-2], arrayOfDrivers[arrayOfDrivers.length-1]];
  return lastTwo;
}
 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}
 const fareDoubler = createFareMultiplier(2);
 const fareTripler = createFareMultiplier(3);
 function fetchSpecifiedDrivers(arrayOfDrivers, whichFN) {
  return whichFN(arrayOfDrivers);
}