const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiple) {
	return (fare) => fare * multiple;
}

const fareDoubler = function (fare) {
	return createFareMultiplier(2)(fare);
}
const fareTripler = function (fare) {
	return createFareMultiplier(3)(fare);
}
function selectDifferentDrivers (drivers, fn) {
	return fn(drivers);
}