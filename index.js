const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

const createFareMultiplier = function (fare) {
  return function (num) {
    return (fare * num)
  }
}

const fareDoubler = createFareMultiplier (2)

const fareTripler = createFareMultiplier (3)

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers (drivers)
}
