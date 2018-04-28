
// returnFirstTwoDrivers() — Declare a variable with const 
// that is assigned an anonymous function. 
// The assigned function should accept an array of drivers as an argument 
// and return the first two drivers in the array.

const returnFirstTwoDrivers= function(drivers){
	array = []
	array.push(drivers[0])
	array.push(drivers[1])
	return array
}  

const returnLastTwoDrivers= function(drivers){
	array = []
	array.push(drivers[drivers.length-2])
	array.push(drivers[drivers.length-1])
	return array
}  

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function(i){
	return function(fare){
		return result = fare*i
	}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, functionDriver) {
	return functionDriver(arrayOfDrivers)
}