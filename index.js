const returnFirstTwoDrivers = function(drivers) {
	let firstTwo = [];
	first = drivers[0];
	second = drivers[1];
	firstTwo.push(`${first}`);
	firstTwo.push(`${second}`);
	return firstTwo;
}

const returnLastTwoDrivers = function(drivers) {
	return drivers.slice(drivers.length - 2, drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (integer) {
  	return function squared(fare){
  		const multipied = integer * fare;
  		return multipied;
  	};
}

function fareDoubler (fare) {
	const doubled = createFareMultiplier(2);
	return doubled(fare);
}

function fareTripler (fare) {
	const tripled = createFareMultiplier(3);
	return tripled(fare);
}

function fetchSpecifiedDrivers(drivers,funcName) {
 return funcName(drivers);
}