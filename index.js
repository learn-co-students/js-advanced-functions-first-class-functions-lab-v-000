// Code your solution in this file!

// const driverFunction = returnFirstTwoDrivers(arrayOfDrivers) {
//   return arrayOfDrivers.slice(0, 1)
// };

  function returnFirstTwoDrivers(arrayOfDrivers) {
    return arrayOfDrivers.slice(0, 2)
};

  function returnLastTwoDrivers(arrayOfDrivers) {
    return arrayOfDrivers.slice(-2)
};

  let selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
  ]

  function createFareMultiplier(multiplier){
    return function FareMultiplier(fare){
       return (fare * multiplier)
    }
  }

  const fareDoubler = createFareMultiplier(2)


  const fareTripler = createFareMultiplier(3)


  function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers)
  }


//
// const returnFirstTwoDrivers = function (arrayOfDrivers) => {
//   return arrayOfDrivers.slice(0, 1)
// };
