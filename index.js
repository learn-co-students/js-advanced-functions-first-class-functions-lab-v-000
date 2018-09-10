// // Code your solution in this file!

const returnFirstTwoDrivers = function (driversArray) {
  return [driversArray[0], driversArray[1]];
}

const returnLastTwoDrivers = function (driversArray) {
  return [driversArray[driversArray.length - 2], driversArray[driversArray.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (num1) {
  return function (num2) { return num1 * num2; };
};

function fareDoubler(fare) {
  return fare * 2;
};

function fareTripler(fare) {
  return fare * 3;
};

function fetchSpecifiedDrivers(arrayOfDrivers, operation) {
  return operation(arrayOfDrivers);
}
