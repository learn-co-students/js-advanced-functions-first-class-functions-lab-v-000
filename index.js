// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
	return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array) {
	return array.slice(-2)
}

const selectingDrivers = function() {
	return [returnFirstTwoDrivers, returnLastTwoDrivers]
}()

const createFareMultiplier = function(number) {
	return function(fare) { return fare * number }
}

const fareDoubler = function(fare) {
	return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
	return createFareMultiplier(3)(fare)
}

const fetchSpecifiedDrivers = function(array, func) {
	return func(array)
}