// Code your solution in this file!

const returnFirstTwoDrivers = (array) =>  {
  const new_arr = []

    new_arr.push(array[0])
    new_arr.push(array[1])
    return new_arr


  // return anonymous
}





const returnLastTwoDrivers = (array) => {
  const new_arr = []
  let removed = array.slice(-2)


  return removed
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(value) {
  return function(newValue) {
    return newValue * value
  }
}


const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

selectDifferentDrivers = (drivers, someFunction) =>  {
  return someFunction(drivers)
}
