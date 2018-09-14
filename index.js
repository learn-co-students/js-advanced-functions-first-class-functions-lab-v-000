


const returnFirstTwoDrivers = function (drivers) {
  const two = [ drivers[0], drivers[1] ];
  return two;
};


const returnLastTwoDrivers = function (drivers) {
  const two = [ drivers[drivers.length - 2], drivers[drivers.length - 1] ];
  return two;
};


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



const createFareMultiplier = function (multiplier) {
  return function (num) {
    return num * multiplier;
  };
};



function fareDoubler(fare) {
  return fare * 2;
}


function fareTripler(fare) {
  return fare * 3;
}


function fetchSpecifiedDrivers(drivers, returnLastTwoDrivers) {
  return returnLastTwoDrivers(drivers);
}
