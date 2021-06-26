// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
	const array = [drivers[0], drivers[1]];
	return array;
}

const returnLastTwoDrivers = function (drivers) {
	return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(mult) {
	return function (fare) {
		return fare * mult;
	}
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, callback) {
	return callback(arrayOfDrivers);
}


