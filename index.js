const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)
const returnLastTwoDrivers = (drivers) => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  const mult = fare => (fare * num);
  return mult
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, func) => func(drivers)
