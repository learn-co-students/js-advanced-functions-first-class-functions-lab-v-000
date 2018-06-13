// Code your solution in this file!

const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers) {
  const firstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
  };
  return firstTwoDrivers(drivers);
}

const returnLastTwoDrivers = function returnLastTwoDrivers(drivers){
  const lastTwoDrivers = function(drivers){
    return drivers.slice(-2);
  };
  return lastTwoDrivers(drivers);
}

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(multiplier){
    const farecalc = function(fare){
      return fare * multiplier;
    };
    return farecalc;
  }

function fareDoubler(d){
  const double = createFareMultiplier(2);
  return double(d);
}

function fareTripler(t){
  const triple = createFareMultiplier(3);
  return triple(t);
}


function selectDifferentDrivers(arrayOfDrivers, driversFunction){
  return driversFunction(arrayOfDrivers);
}

\\cool!
