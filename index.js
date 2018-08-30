// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
	return newDrivers = drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
	return newDrivers = drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (fare) {
	if (fare === 2) {
		return fareDoubler;
	}
	if (fare === 3) {
		return fareTripler;
	}
	if (fare === 5) {
		return fareQuintupler;
	}

}

const fareDoubler = function (fare) {
	return fare * 2;
}

const fareTripler = function (fare) {
	return fare * 3;
}

const fareQuintupler = function (fare) {
	return fare * 5;
}

const selectDifferentDrivers = function (drivers, returnSomeDrivers) {
	return returnSomeDrivers (drivers);
}