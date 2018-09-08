const returnFirstTwoDrivers = function (drivers) { return drivers.slice(0,2)}
const returnLastTwoDrivers = function (drivers) { return drivers.slice(-2)}
const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]
const createFareMultiplier = function (int) {return function (fare) {return fare * int }}
const fareDoubler = function (fare) {return createFareMultiplier(2)(fare)}
const fareTripler = function (fare) {return createFareMultiplier(3)(fare)}
const fetchSpecifiedDrivers = function (drivers, fn) {return fn(drivers)}

/*

+ `fetchSpecifiedDrivers()` — This function takes two arguments,
an array of `drivers` and either the `returnFirstTwoDrivers()` or `returnLastTwoDrivers()` function.
Based on these two arguments, `fetchSpecifiedDrivers()` will return either the first two drivers or the last two drivers.
*/
