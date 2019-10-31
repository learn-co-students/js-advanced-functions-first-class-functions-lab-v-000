const returnFirstTwoDrivers = function (array) {
  return array.slice(0,2);
};
const returnLastTwoDrivers = function (array) {
  return array.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return function (fare) { return fare * num };
};
function fareDoubler(fare) {
  return createFareMultiplier(2)(fare);
};
function fareTripler(fare) {
  return createFareMultiplier(3)(fare);
};
function selectDifferentDrivers(array, fun) {
  if (typeof(fun) === 'function') {
    return fun(array);
  } else {
    throw "NAY I SAY TO YOU"
  }
};
