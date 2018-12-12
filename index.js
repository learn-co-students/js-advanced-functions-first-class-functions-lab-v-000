// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
	const newArr = drivers.slice(0,2);	
	return newArr; 
};

const returnLastTwoDrivers = function (drivers) {
  const newArr = drivers.slice(-2);
  return newArr;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (mult) {
    return function(fare) {
        return (fare * mult);
    };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(arrayOfDrivers, func) {
	return func(arrayOfDrivers);
}
