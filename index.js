// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
	newDrivers = []
	newDrivers.push(drivers[0])
	newDrivers.push(drivers[1])
	return newDrivers
}

// const returnFirstTwoDrivers = function (drivers) {
//   return drivers.slice(0, 2);
// };

const returnLastTwoDrivers = function (drivers) {
	newDrivers = []
	newDrivers.push(drivers[drivers.length - 2])
	newDrivers.push(drivers[drivers.length - 1])
	return newDrivers
}

// const returnLastTwoDrivers = function (drivers) {
//   return drivers.slice(-2);
// };

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
	return function (fare) {
		return number * fare
	}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, firstLast) {
	return firstLast(drivers)
}