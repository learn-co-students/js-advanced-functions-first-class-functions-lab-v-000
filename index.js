// Code your solution in this file!
 const returnFirstTwoDrivers = function(arr) {
   return [arr[0], arr[1]];
 }
 const returnLastTwoDrivers = function(arr) {
   return [arr[(arr.length - 2)], arr[(arr.length - 1)]];
 }
 const selectingDrivers = [
   returnFirstTwoDrivers, returnLastTwoDrivers
 ]
function createFareMultiplier(num) {
  return num => num * num;
}
function fareDoubler(num) {
    return num * 2;
}
function fareTripler(num) {
  return num * 3;
}
function selectDifferentDrivers(arr, fun) {
  return fun(arr);
}
