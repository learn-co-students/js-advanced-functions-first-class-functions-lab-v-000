const returnFirstTwoDrivers = function  (drivers) {
	return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function  (drivers) {
	return drivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function () {
  return function fareQuintupler (num) {
    return fare = num * 5;
  };
};

function fareDoubler (price) {
	return fare = price * 2
}

function fareTripler (price) {
	return fare = price * 3
}

function selectDifferentDrivers(drivers, option ) {
	if (option === returnFirstTwoDrivers){
		return returnFirstTwoDrivers(drivers);
	} else {
		return returnLastTwoDrivers(drivers);
	}
}





