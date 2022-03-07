const returnFirstTwoDrivers = array => array.slice(0,2);

const returnLastTwoDrivers = array => array.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
	return function (fare) {
		return fare * multiplier;
	}
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(array, func) {
	return func(array)
}