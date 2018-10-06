// Code your solution in this file!
const returnFirstTwoDrivers = function (collection) {
  return collection.slice(0,2)
}

const returnLastTwoDrivers = function (collection) {
  return collection.slice(collection.length-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multi) {
  return function (fare) {
    return fare*multi
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(collection, subsetFunction) {
  return subsetFunction(collection)
}
