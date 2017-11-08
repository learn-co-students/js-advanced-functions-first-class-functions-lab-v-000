// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

 const returnFirstTwoDrivers = function(arr)
{
  return arr.slice(0,2);
}

const returnLastTwoDrivers = function(arr)
{
 return arr.slice(arr.length-2,arr.length);
}


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(num)
{
  return function(num){return Math.pow(num,2);}
}

const fareDoubler = function(num)
{
  return num+num;
}

const fareTripler = function(num)
{
  return num+num+num;
}


const selectDifferentDrivers = function(arr, passedfunction)
{
  return passedfunction(arr);
}
