const returnFirstTwoDrivers = function (drivers) {
    return [drivers[0], drivers[1]]
  }

  const returnLastTwoDrivers = function (drivers) {
      return [drivers[drivers.length - 2], drivers[drivers.length - 1]]
    }
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (fare) {
  return function (num) {
    return fare * fare
  }
}
const fareDoubler = function (createFareMultiplier) {
    return (createFareMultiplier)*2
}
const fareTripler = function (createFareMultiplier) {
    return (createFareMultiplier)*3
}
const selectDifferentDrivers = function differentDrivers(drivers, arg) {
  return arg(drivers)
}
