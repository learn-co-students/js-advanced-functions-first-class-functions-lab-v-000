// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };

const returnLastTwoDrivers = function (drivers) {
    let driverLength = drivers.length 
    return drivers.slice(driverLength - 2, driverLength);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };

  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);

  const fetchSpecifiedDrivers = function(drivers, selectedDrivers) {
    return selectedDrivers(drivers);
  };
