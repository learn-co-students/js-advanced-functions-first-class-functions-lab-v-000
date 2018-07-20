// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array) {
  return array.slice(-2)
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

const createFareMultiplier = function(number) {
  return function(fare) {
    return fare * number;
  };
};

const fareDoubler = function(fare) {
      return fare * 2;
}

const fareTripler = function(fare) {
      return fare * 3;
}

// const selectDifferentDrivers = function(array, func) {
//   const res = Object.assign([], array)
//   debugger
//  for (const element of func(array)) {
//      res.filter(e => e !== element)
//   }
//   return res
// }
//THIS WORKS TO GET THE OPPOSITE DRIVERS!!

const selectDifferentDrivers = function(array, func) {
  return func(array)
}
