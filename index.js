// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
      return [drivers[0], drivers[1]];
}


const returnLastTwoDrivers = function(drivers) {
    //  debugger
      return [drivers[drivers.length-2], drivers[drivers.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
 return function(multiplier) {
   return (fare * multiplier)
 };

}
// helpful source: https://github.com/learn-co-students/js-advanced-functions-first-class-functions-readme-online-web-sp-000#returning-functions-from-functions
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(arrayOfDrivers, setOfDrivers) {
return setOfDrivers(arrayOfDrivers);
  // if (setOfDrivers === returnLastTwoDrivers){
  //   return returnLastTwoDrivers(arrayOfDrivers);
  // } else {
  //   return returnFirstTwoDrivers(arrayOfDrivers);
  // }
}
