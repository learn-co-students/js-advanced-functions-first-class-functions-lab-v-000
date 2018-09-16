// Code your solution in this file!

  const returnFirstTwoDrivers = function(drivers) {
    // console.log(drivers.slice(0,2));
    return drivers.slice(0,2);
  };


 const returnLastTwoDrivers = function(drivers) {
   // console.log(drivers.slice(-2));
   return drivers.slice(-2);
 };

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
  // console.log("multiplier", multiplier)
  return function (value) {
    // console.log ('value', value);
    // console.log("result", multiplier * value);
  return multiplier * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(drivers, selectingDrivers){
  // console.log('drivers', drivers);
   // console.log('return', selectingDrivers(drivers));
   return  selectingDrivers(drivers);
};
