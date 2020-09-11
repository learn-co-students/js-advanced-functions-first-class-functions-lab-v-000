const returnFirstTwoDrivers = function(driver_array) {
  return driver_array.slice(0,2)
}

const returnLastTwoDrivers = function(driver_array) {
  return driver_array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function(fare) {
    return multiplier * fare
  }
}

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(driver_array, driver_function) {
  return driver_function(driver_array)
}