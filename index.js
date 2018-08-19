// Code your solution in this file!


const returnFirstTwoDrivers = function two (drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function last_two(drivers) {
  return drivers.slice(-2)
};


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(mult) {
  return function createFareMultiplier(fare) {
    return fare * mult}
}

const fareDoubler = createFareMultiplier(2);

const fareTripler= createFareMultiplier(3);


function selectDifferentDrivers(arr,fn) {
  return fn(arr);
}
