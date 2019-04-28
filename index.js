const returnFirstTwoDrivers = function(array) {
  return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array) {
  return array.slice(array.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
  return function(i){return integer * i}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(array, someFunction) {
  return someFunction(array)
}
