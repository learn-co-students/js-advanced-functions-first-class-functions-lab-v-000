const returnFirstTwoDrivers = function (drivers) {
    return [drivers[0], drivers[1]];
  }

const returnLastTwoDrivers = function (drivers) {
    return [drivers[drivers.length-2], drivers[drivers.length-1]];
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
    return function (fare) { return number * fare }
  }

function fareDoubler(fare) {
    return 2 * fare;
  }

function fareTripler(fare) {
    return 3 * fare;
  }

function fetchSpecifiedDrivers(drivers, fn) {
    return fn(drivers);
  }
