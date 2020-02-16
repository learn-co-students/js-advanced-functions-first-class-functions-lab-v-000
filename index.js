
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

// should return a new array of the first two drivers
// should be assigned to a constant
const returnFirstTwoDrivers = function(drivers) {
return driversTwo = drivers.filter(name => drivers.indexOf(name) < 2);
}
// returnFirstTwoDrivers(drivers);

// should return a new array of the last two drivers
// should be assigned to a constant
const returnLastTwoDrivers = function(drivers) {
return driversTwo = drivers.filter(name => drivers.indexOf(name) > drivers.length-3);
}
// returnLastTwoDrivers(drivers);

// has the `returnFirstTwoDrivers` function as its first element
// has the `returnLastTwoDrivers` function as its last element
// allows us to invoke either function from the array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// selectingDrivers[0](drivers);
// selectingDrivers[1](drivers);

//returns a function
// should multiply a given value using the created multiplier
const createFareMultiplier = function (divisor) {
  return function (fare) {
    return fare * divisor;
  };
};
//const fareQuintupler = createFareMultiplier(5);
// fareQuintupler(5);

// is a function
// doubles fares
const fareDoubler = createFareMultiplier(2);
fareDoubler(10);
// is a function
// triples fares
const fareTripler = createFareMultiplier(3);
fareTripler(12);

// eturns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// returns the last two drivers when passed returnLastTwoDrivers() as the second argument
function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(drivers);
}
// selectDifferentDrivers(drivers, returnFirstTwoDrivers);
// selectDifferentDrivers(drivers, returnLastTwoDrivers);
