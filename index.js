

const returnFirstTwoDrivers = function(array){
  return [array[0], array[1]];
}


const returnLastTwoDrivers = function(array){
  // return [array[array.length-2], array[array.length-1]]
  return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(integer){

return multiply = function(fare){
    return fare * integer
  }

}

const fareDoubler = function(fare){
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(array, fn){
  return fn(array)
}
