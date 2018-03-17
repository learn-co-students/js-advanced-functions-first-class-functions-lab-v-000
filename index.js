const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
  return function fareMultiplier(int){
    return int * int;
  }
}

const fareDoubler = function(int){
  return int * 2;
}
const fareTripler = function(int){
  return int * 3;
}

function selectDifferentDrivers(drivers, callback){
  return callback(drivers);
}
