const returnFirstTwoDrivers = (function(a) {
  return a.slice(0,2);
})

const returnLastTwoDrivers = (function(a) {
  return a.slice(-2);
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (function(fare) {
  return function(multiplier) {
  return fare * multiplier
  }
})

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(driver, f){
  return f(driver)
}
