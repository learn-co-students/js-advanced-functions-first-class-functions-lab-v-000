const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2)
}
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length - 2)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier
  }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
function fetchSpecifiedDrivers(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers)
}