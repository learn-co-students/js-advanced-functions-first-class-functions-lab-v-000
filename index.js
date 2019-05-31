const returnFirstTwoDrivers = function(drivers) {
	return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
	return drivers.slice(-2);
}

const selectingDrivers = [
	returnFirstTwoDrivers,
	returnLastTwoDrivers
]

const createFareMultiplier = function(fareMultiplier) {
	return function(num) {
		return num * num;
	};
}

function fareDoubler(num) {
	return num * 2;
}

function fareTripler(num) {
	return num * 3;
}

function fetchSpecifiedDrivers(drivers, fn) {
	return fn(drivers);
}