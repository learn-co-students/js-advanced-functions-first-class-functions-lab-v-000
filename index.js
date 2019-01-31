const returnFirstTwoDrivers = drivers => {
	//return driverArray = [drivers[0], drivers[1]];
	return drivers.slice(0, 2);
};
const returnLastTwoDrivers = drivers => {
	return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers,  returnLastTwoDrivers];

const createFareMultiplier = num => {
  let number = Number(num);
  function fareMultiplier(fare) { return number * fare };
  return fareMultiplier;
}

const fareMultiplier = (fare, num) => {
	return fare * num;
};

const fareDoubler = fare => {
	return fareMultiplier(2, fare);
};

const fareTripler = fare => {
	return fareMultiplier(3, fare);
};

const fetchSpecifiedDrivers = (driversArray, cbFunction) => {
	return cbFunction(driversArray);
}
