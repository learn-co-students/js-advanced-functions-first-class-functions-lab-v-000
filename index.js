const drivers2 = function(arr){
  let newArr = []
  newArr.push(arr[0])
  newArr.push(arr[1])
  return newArr
}

const last2drivers = function(arr){
  let newArr = []
  newArr.push(arr[arr.length-2])
  newArr.push(arr[arr.length-1])
  return newArr
}

const returnFirstTwoDrivers = function (arr){
  return drivers2(arr)
}

const returnLastTwoDrivers = function (arr){
  return last2drivers(arr)
}

const selectingDrivers = [returnFirstTwoDrivers, 
  returnLastTwoDrivers]

const createFareMultiplier = function (factor){
  return function (fare) {
    return fare * factor
  }
}

function fareDoubler(fare){
  return fare * 2
}

function fareTripler(fare){
  return fare * 3
}

function selectDifferentDrivers(arr, func){
  return func(arr)
}