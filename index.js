const returnFirstTwoDrivers = drivers => [drivers[0], drivers[1]]
const returnLastTwoDrivers = drivers => [drivers.slice(-2)[0], drivers.slice(-1)[0]]
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const selectDifferentDrivers = (drivers, func) => func(drivers)

const createFareMultiplier = multiplyBy => value => multiplyBy * value
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
