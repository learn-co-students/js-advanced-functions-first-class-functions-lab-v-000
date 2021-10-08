// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};

////// Shopify Challenge
const fareCalculator = function (arr) {
  const stations = ["Atlantic", "Pacific", "Indian", "Arctic", "Southern"];
  const desertLine = [
    "Sahara",
    "Pacific",
    "Gobi",
    "Kalahari",
    "Mojave",
    "Namib",
  ];
  // let fare = 1.5;
  let total = arr[3];
  let origin = arr[1];
  let destination = arr[2];
  // console.log(total);

  let fare =
    Math.abs(stations.indexOf(destination) - stations.indexOf(origin)) * 0.5 +
    1.0;
  let newBalance = total - fare;

  return [fare, newBalance];
};

fareCalculator([123, "Atlantic", "Pacific", 50.0]);
fareCalculator([1, "Atlantic", "Pacific", 22.5]);
fareCalculator([2, "Atlantic", "Pacific", 1.0]);
fareCalculator([3, "Pacific", "Atlantic", 3.0]);
fareCalculator([3, "Atlantic", "Pacific", 1.5]);
fareCalculator([3, "Pacific", "Southern", 3.0]);
fareCalculator([1, "Atlantic", "Indian", 50.0]);
fareCalculator([2, "Atlantic", "Southern", 2.0]);
fareCalculator([3, "Southern", "Atlantic", 0.5]);

// def calculate_fare(tap_out)
//   balance = tap_out[3]
//   origin = tap_out[1]
//   destination = tap_out[2]

//   stops = ["Atlantic", "Pacific", "Indian", "Arctic", "Southern"]
//   fare = ((stops.index(destination) - stops.index(origin)).abs * 0.50) + 1.00

//   new_balance = balance - fare

//   return [fare , new_balance]

// end

// ["Atlantic", "Pacific", "Indian", "Arctic", "Southern"]

// input = [123, "Atlantic", "Pacific", 50.00]
// output = [1.50, 48.50]

// raise if calculate_fare(input) != output

// input = [1, "Atlantic", "Pacific", 22.50]
// output = [1.50, 21.00]

// raise if calculate_fare(input) != output

// input = [2, "Atlantic", "Pacific", 1.00]
// output = [1.50, -0.50]

// raise if calculate_fare(input) != output

// input = [3, "Pacific", "Atlantic", 3.00]
// output = [1.50, 1.50]

// raise if calculate_fare(input) != output

// input = [3, "Atlantic", "Pacific", 1.50]
// output = [1.50, 0.00]

// raise if calculate_fare(input) != output

// input = [3, "Pacific", "Southern", 3.00]
// output = [2.50, 0.50]

// raise if calculate_fare(input) != output
