const returnFirstTwoDrivers = drivers => drivers.slice(0, 2)
const returnLastTwoDrivers = drivers => drivers.slice(-2)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const selectDifferentDrivers = (drivers, func) => func(drivers)

const createFareMultiplier = multiplyBy => value => multiplyBy * value
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
