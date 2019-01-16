// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
	return drivers.slice(0,2)
};

//returns the first two drivers

const returnLastTwoDrivers = function(drivers) {
	return drivers.slice(-2)
};

//returns the last two drivers

const selectingDrivers = [
	returnFirstTwoDrivers,
  	returnLastTwoDrivers
];

//creates an array with two elements: returnFirstTwoDrivers & returnLastTwoDrivers

const createFareMultiplier = function(integer) {
  return function(fare) {
    return integer * fare;
  };
};

//returns the fare multiplied

const fareDoubler = createFareMultiplier(2);  //doubles the fare
const fareTripler = createFareMultiplier(3);  //triples the fare


function fetchSpecifiedDrivers(drivers, arrayOfDrivers) {
	return arrayOfDrivers(drivers)
};

//returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//returns the last two drivers when passed returnLastTwoDrivers() as the second argument