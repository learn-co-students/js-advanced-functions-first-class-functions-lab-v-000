// Code your solution in this file!
// returnFirstTwoDrivers() — Declare a variable with const that is assigned an anonymous function.
// The assigned function should accept an array of drivers as an argument and return
// // the first two drivers in the array.
const returnFirstTwoDrivers = function(arr){
  return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr){
  return arr.pop(1,arr.length)
}
