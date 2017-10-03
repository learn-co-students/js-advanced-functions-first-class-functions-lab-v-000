
const returnFirstTwoDrivers = function (drivers) {
	let newArray = []
	newArray.push(drivers[0]);
	newArray.push(drivers[1]);
	return newArray;	
}


const returnLastTwoDrivers = function (drivers) {
	let newArray = []
	newArray.push(drivers[drivers.length - 2]);
	newArray.push(drivers[drivers.length - 1]);
	return newArray;	
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(n) {
	return function (arg) {
		return arg * n;
	}
}

function fareDoubler(n) {
	return createFareMultiplier(2)(n)
}

function fareTripler(n) {
	return createFareMultiplier(3)(n)
}

function selectDifferentDrivers(drivers, cb) {
	return cb(drivers);
}