// Code your solution in this file!
const returnFirstTwoDrivers = (function(arr) {
  return arr.slice(0, 2);
})

const returnLastTwoDrivers = (function(arr) {
  return arr.slice(arr.length - 2, arr.length);
})


const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

function createFareMultiplier(multiplier) {
  return function(multiplier) {
    return multiplier * multiplier;
  }
}

function fareDoubler(fare) {
  return fare * 2;
}

function fareTripler(fare) {
  return fare * 3;
}

function selectDifferentDrivers(arr, selector){
  return selector(arr);
}
