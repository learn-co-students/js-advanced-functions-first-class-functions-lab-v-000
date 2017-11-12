// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = drivers => {
    return drivers.slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const createFareMultiplier = (number) => {
    return function(num) {
        return num * number
    }
}

const fareDoubler = (number) => {
    return number * 2
}

const fareTripler = (number) => {
    return number * 3
}

const selectDifferentDrivers = (arrayOfDrivers, cb) => {
    return cb(arrayOfDrivers)
}
