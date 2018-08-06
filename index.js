// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
	return array.slice(0, 2)
}

const returnLastTwoDrivers = function (array) {
	const length = array.length - 1
	return array.slice(length - 1)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (num) {
	return function (otherNum) {
		return num * otherNum
	};
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (array, something) {
	return something(array)
}