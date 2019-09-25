const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2)

const returnLastTwoDrivers = (drivers) => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (multiply) {
  return function (fare) {return fare * multiply}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, select){
  return select(drivers)
}
