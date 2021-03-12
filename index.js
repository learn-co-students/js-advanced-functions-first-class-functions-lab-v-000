// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
  return [array[0],array[1]]
}

const returnLastTwoDrivers = (array) => {
  return [array[array.length-2],array[array.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function (fare) {
    return fare * integer
  }
}

function selectDifferentDrivers(arrayOfDrivers, callback) {
  return callback(arrayOfDrivers)
}

const [fareDoubler, fareTripler] = [createFareMultiplier(2), createFareMultiplier(3)]
