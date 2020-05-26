// Code your solution in this file!
function returnFirstTwoDrivers(DriverArray) {
    const firstTwo =[]
    for (var i = 0; i < 2; i++) {
        firstTwo.push(DriverArray[i]);
    }
    return firstTwo
}

function returnLastTwoDrivers(DriverArray) {
    const lastTwo = []
    console.log(DriverArray)
    for (var i = DriverArray.length - 2; i < DriverArray.length ; i++) { //console log showed forward last two not reverse
        //'Freddy', 'Claudia' not 'Claudia', 'Freddy'
        console.log(i + ": " + DriverArray[i]);
        lastTwo.push(DriverArray[i]);
    }

    return lastTwo
}
// [a, b ,c ,d]
//  0, 1, 2, 3
// length = 4

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(fare){ //in order to return a function within a function all you need is return.
        return multiplier * fare;
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare) //when calling a function within a function you need parameters for inside and out.
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, functionChoice) {
  if (functionChoice == returnFirstTwoDrivers) { //remember js rules () then {}
      return returnFirstTwoDrivers(arrayOfDrivers)
  }
  else{
    return returnLastTwoDrivers(arrayOfDrivers)
  }
}