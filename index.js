// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
    return [arr[0],arr[1]];
 };

 const returnLastTwoDrivers = function(arr){
     return [arr[arr.length-2],arr[arr.length-1]];
  };

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
   return function multiply(){
     return int * int ;
   };
}

const fareDoubler = function(fare){
  return fare * 2;
};


const fareTripler = function(fare){
  return fare * 3;
}

function fetchSpecifiedDrivers(arr, retFun){
  return retFun(arr);
}
