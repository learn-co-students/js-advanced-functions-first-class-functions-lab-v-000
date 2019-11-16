const returnFirstTwoDrivers = function(arr) { return arr.slice(0, 2)};

const returnLastTwoDrivers = function(arr) { return arr.slice(Math.max(arr.length - 5, 2))};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(a, b) {
	return function(b) {return a * b};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arr, funct) {return funct(arr);}
