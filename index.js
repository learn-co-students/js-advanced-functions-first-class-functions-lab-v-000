// const returnFirstTwoDrivers = function(drivers) {
// 	return drivers.slice(0,2);
// }

const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

// const returnLastTwoDrivers = function(drivers) {
// 	return drivers.slice(-2);
// }

const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fare) {
	return function (amount) {
		return amount * fare
	}
}

// const fareDoubler = function(fare) {
// 	return fare * 2;
// }

const fareDoubler = fare => fare * 2;

// const fareTripler = function(fare) {
// 	return fare * 3;
// }

const fareTripler = fare => fare * 3;
	
// const selectDifferentDrivers = function(drivers, cb) {
// 	return cb(drivers);
// }

const selectDifferentDrivers = (drivers, cb) => cb(drivers);
