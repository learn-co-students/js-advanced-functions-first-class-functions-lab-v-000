// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers){
  return drivers.slice(0, 2)
};

const returnLastTwoDrivers = function (drivers){
  return drivers.slice(-2)
};

const selectingDrivers = [
  returnFirstTwoDrivers, returnLastTwoDrivers
]

const createFareMultiplier = function (int) {
  return function(fair){return fair * int}
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

  function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers)
}
