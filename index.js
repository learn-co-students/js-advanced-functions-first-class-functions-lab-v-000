// Code your solution in this file!
    const returnFirstTwoDrivers = function (drivers) {
         let newArray = []
         newArray.push(drivers[0], drivers[1])
        return newArray
    }

    const returnLastTwoDrivers = function (drivers) {
        let newArray = []
        newArray.push(drivers[drivers.length - 2], drivers[drivers.length - 1] )
       return newArray
   }

   const selectingDrivers = [
     returnFirstTwoDrivers,
     returnLastTwoDrivers,
    ];

    const createFareMultiplier = function(int) {
        return function(value){
            return int *  value;
        }    
    }

    const fareDoubler = createFareMultiplier(2)

    const fareTripler = createFareMultiplier(3)

    function fetchSpecifiedDrivers(drivers, returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    }


