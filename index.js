// Code your solution in this file!

const new_drivers = function returnFirstTwoDrivers(drivers){
  const new_array = [];
  new_array.push(drivers[0]);
  return new_array
}

const returnFirstTwoDrivers = function (array){
  return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
  return array.slice(-2)

}


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier){
  return function(fare){
    return fare * multiplier

  }
}


function fareDoubler(fare){
  return fare * 2


}

function fareTripler(fare){
  return fare * 3
}

function selectDifferentDrivers(arrayOfDrivers, fn){
  if (fn === returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers)
  } else if (fn === returnLastTwoDrivers) {
    return returnLastTwoDrivers(arrayOfDrivers)
  }


}
