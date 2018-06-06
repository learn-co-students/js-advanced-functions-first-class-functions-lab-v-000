// Code your solution in this file!
const returnFirstTwoDrivers =
  function returnFirstTwoDrivers(drivers){
    let driversCopy = drivers.slice();
    driversCopy.length = 2;
    return driversCopy;
  };

const returnLastTwoDrivers =
  function returnLastTwoDrivers(drivers){
    debugger;
    return drivers.slice(-2);
  };

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier =
  function createFareMultiplier(num){
    return num * 5;
  }
