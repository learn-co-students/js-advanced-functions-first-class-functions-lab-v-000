const returnFirstTwoDrivers = function(drivers) {
  firstTwo = []
  firstTwo.push(drivers[0], drivers[1])
  return firstTwo
}

const returnLastTwoDrivers = function(drivers){
   return drivers.slice(-2)
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

function createFareMultiplier(number) {
  return function(multiply){
    return number * multiply
  }
}

const fareDoubler = createFareMultiplier(2)

let fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(drivers, cb){
  return cb(drivers)
}
