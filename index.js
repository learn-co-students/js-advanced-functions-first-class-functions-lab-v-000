// Code your solution in this file!

//A variable that stores a function expression.
const returnFirstTwoDrivers=function(drvs){
  return drvs.slice(0,2);
};

//Another variable that stores a function expression.
const returnLastTwoDrivers=function(drvs){
  return drvs.slice(-2);
};

//An array of function objects
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];


//A named function statement (described, but not referenced or invoked)
function createFareMultiplier(mult){
  return function(fare){
    return fare*mult;
  };
}

const fareDoubler=createFareMultiplier(2);
const fareTripler=createFareMultiplier(3);


//Another function statement
function selectDifferentDrivers(drvs,selectFunc){
  return selectFunc(drvs);
}