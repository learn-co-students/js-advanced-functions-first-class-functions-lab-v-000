// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
	let newDrivers = [];
	for (let i = 0; i < 2; i++) {
		newDrivers.push(drivers[i]);
	}
	return newDrivers;
}

const returnLastTwoDrivers = function(drivers) {
	return drivers.filter(function(driver) {
		return driver === drivers[drivers.length -1] || driver === drivers[drivers.length -2]
	})
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer) {
	return function(fare) {
		return fare * integer;
	}
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, selectDriversFunction) {
	return selectDriversFunction(drivers);
}
