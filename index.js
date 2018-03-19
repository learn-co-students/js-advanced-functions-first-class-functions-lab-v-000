const returnFirstTwoDrivers = function (array) {
  return [array[0], array[1]];
};

const returnLastTwoDrivers = function (array) {
  return [array[array.length - 2], array[array.length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function (fare) {
    return num * fare;
  }
}

const fareDoubler = function (fare) {
  return createFareMultiplier(fare)(2);
}

const fareTripler = function (fare) {
  return createFareMultiplier(fare)(3);
}

function selectDifferentDrivers(array, func) {
  return func(array);
}
