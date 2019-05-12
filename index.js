// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2,)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function(number) {
    return function(value){
      return number * value
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, selection){
  return (selection(drivers))
}
