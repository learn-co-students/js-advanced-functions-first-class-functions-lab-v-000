const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


// Function and invoked function for repetitive code

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


// returnFirstTwoDrivers or returnLastTwoDrivers function passed in as argument
function fetchSpecifiedDrivers(drivers, whichDrivers) {
  return whichDrivers(drivers);
}
