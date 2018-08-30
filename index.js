// Code your solution in this file!
//const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
//array.slice(start, end)

//should return a new array containing the first 2 drivers
//assigned to a constant
const returnFirstTwoDrivers = function(drivers){
   return drivers.slice(0,2);
 };

//should return a new array of the last 2 drivers
const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
};

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int) {
  return function (fare) {
    return fare * int;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, eitherDriver){
  return eitherDriver(drivers);
};
