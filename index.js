// Code your solution in this file!
//  This is test

const returnFirstTwoDrivers = function(drivers){  
     return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

var  selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function(i){
    return function(fare){
        return fare * i
    }
}
    
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function(drivers, selectingDrivers){
    return selectingDrivers(drivers)
    
  
}