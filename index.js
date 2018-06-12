// Code your solution in this file!
const returnFirstTwoDrivers  = function (drivers){
 return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(drivers.length - 2, drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier =  function (multiplier){
  return function () { return 5 * multiplier};
};

const fareDoubler =  function(fare){
    return 2 * fare
  };

const fareTripler = function(fare){
  return 3 * fare
};

const selectDifferentDrivers = function(drivers,driverFunction){
  return driverFunction(drivers)

}
