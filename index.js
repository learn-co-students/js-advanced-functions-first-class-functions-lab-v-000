const returnFirstTwoDrivers = function(array) {
  return [array[0], array[1]];
}

const returnLastTwoDrivers = function(array) {
  return [array[array.length - 2], array[array.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(array, callback) {
  return callback(array);
}
