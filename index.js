const returnFirstTwoDrivers = function(drivers) {
console.log(drivers.slice(0,2));
	return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
	console.log(drivers.slice(-2));
	return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(rate){
	return function (fare) {
		return fare * rate
	}
}

const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectFunc){
	return selectFunc(drivers);
}

