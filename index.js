const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2)

const returnLastTwoDrivers = (drivers) => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (multiply) {
  return function (fare) {return fare * multiply}
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare)

const fareTripler = (fare) => createFareMultiplier(3)(fare)

function selectDifferentDrivers(drivers, callback){
  return callback(drivers)
}
