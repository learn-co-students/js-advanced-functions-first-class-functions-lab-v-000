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

function createFareMultiplier(num){
  return function fareMultiplier(fare){
    return fare * num;
  }
}

const fareDoubler =
  function fareDoubler(fare){
    return createFareMultiplier(2)(fare);
  }

const fareTripler =
  function fareTripler(fare){
    return createFareMultiplier(3)(fare);
  }

function selectDifferentDrivers(drivers, func){
  if (func === returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
  } else if (func === returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers);
  }
}
