

const returnFirstTwoDrivers = function (drivers)  { 
	return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers)  {
	return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(fare) {
	return function (number) {
		return (fare * number)
	}
}



const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(arrayOfDrivers, fn) { 
	return fn(arrayOfDrivers);
}