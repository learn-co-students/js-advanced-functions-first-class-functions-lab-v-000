// returns the first two elements of an array
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
};

// returns the last two elements of an array
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

// returns an array with first function as first element and second function as second element.
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// multiplies the two numbers
const createFareMultiplier = function (fare) {
  return function (number) {
    return fare * number;
  };
};

// Use createFareMultiplier functions so as to double the fare
const fareDoubler = createFareMultiplier(2);

// Use createFareMultiplier functions so as to triple the fare
const fareTripler = createFareMultiplier(3);

// Select different drivers using the functions returnFirstTwoDrivers & returnLastTwoDrivers
const selectDifferentDrivers = function (arrayOfDrivers, selectDrivers) {
  return selectDrivers(arrayOfDrivers);
}
