// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  const newarray = [array[0], array[1]]
  return newarray
}

const returnLastTwoDrivers = function (array) {
  const newarray = [array[array.length - 2], array[array.length - 1]]
  return newarray
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

function createFareMultiplier(multiplier) {
   return function (fare) {
     return fare * multiplier
   }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, constant) {
  return constant(arrayOfDrivers)
}
