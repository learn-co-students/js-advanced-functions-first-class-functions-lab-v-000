// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
  let firstDrive = drivers.slice(0,2);
  return firstDrive;
};

const returnLastTwoDrivers = function(drivers){
  let lastDrive = drivers.slice(-2);
  return lastDrive;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
	return function(fare) {
		return integer * fare;
	};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(arrOfDrivers, driversFn) {
	return driversFn(arrOfDrivers);
}