// Code your solution in this file!
const returnFirstTwoDrivers = (driversArray)=>{
    return driversArray.slice(0,2);
}

const returnLastTwoDrivers = (driversArray)=>{
    return driversArray.slice(driversArray.length-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
    return (number) => number * multiplier
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = (driversArray,fn) => fn(driversArray)