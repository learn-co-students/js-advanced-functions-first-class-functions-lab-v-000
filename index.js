const returnFirstTwoDrivers = function(array) {
  return array.slice(0,2)
}


const returnLastTwoDrivers = function(array) {
  return array.slice(array.length - 2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer){
  return function(multiplier){
    return integer * multiplier
  }
}


const fareDoubler = function(fare) {
  return fare * 2
}

const fareTripler = function(fare) {
  return fare * 3
}

const selectDifferentDrivers = function(array, func) {
    return func(array)
}
