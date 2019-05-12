// Code your solution in this file!

const returnFirstTwoDrivers = function(array) { return [array[0], array[1]] };

const returnLastTwoDrivers = function(array) { return array.slice(-2) };

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
	return function(fare) { 
		return number * fare;
	};
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};

// function selectDifferentDrivers(array, function) {
// 	switch 'function' {
// 		case 'returnFirstTwoDrivers':
// 			returnFirstTwoDrivers(array);
// 			break;
// 		case 'returnLastTwoDrivers':
// 			returnLastTwoDrivers(array);
// 			break;
// 		}
// 	}
// }
