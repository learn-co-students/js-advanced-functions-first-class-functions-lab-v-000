// Code your solution in this file!
const returnFirstTwoDrivers = (array)=>{
 let drivers = []
 drivers.push(array[0],array[1])
 return drivers
}

const returnLastTwoDrivers = (array)=>{
 let drivers = []
 drivers.push(array[array.length - 2],array[array.length - 1])
 return drivers
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
    
function createFareMultiplier(num){
   return (fare)=>{
        if(num === 4){
            return fare * 4
        }else{
            return num * fare 
        }
   }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, fun){

     return fun(arrayOfDrivers)

 
}