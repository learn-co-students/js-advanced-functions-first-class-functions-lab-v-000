const returnFirstTwoDrivers = function returnFirstTwoDrivers(array) {
  let firstTwo = [];
  firstTwo.push(array[0]);
  firstTwo.push(array[1]);
  return firstTwo;
}

const returnLastTwoDrivers = function returnLastTwoDrivers(array) {
  let lastTwo = [];
  lastTwo.push(array[array.length - 2]);
  lastTwo.push(array[array.length - 1]);
  return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function createFareMultiplier(fare) {
    return (fare * num);
  };
}

function fareDoubler(fare) {
  return createFareMultiplier(2)(fare);
};

function fareTripler(fare) {
  return createFareMultiplier(3)(fare);
};

function fetchSpecifiedDrivers(array, func) {
  return func(array);
};
