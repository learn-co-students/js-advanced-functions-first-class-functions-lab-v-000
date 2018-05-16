// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers){return drivers.slice(0, 2)}
//declare a variable with const
//set that variable to an anonymous function (without a name) that accepts a collection and returns the first 2 elements
const returnLastTwoDrivers = function (drivers){return drivers.slice(-2)}
//declare a variable with const
//set that variable to an anonymous function (without a name) that accepts a collection and returns the last 2 elements

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
//declar a const variable that is an array
// this array will have 2 elements, the first is the returnFirstTwoDrivers, the 2nd is returnLastTwoDrivers

const createFareMultiplier = function (multiplyValue){
    return function (value) {
        return multiplyValue * value;
    }
}
//start with declaring a function to a variable
//this function will accept an argument that will act as a multiplier, the function will yield a different function that will call for an argument that will be multiplied against the multiplier for the higher level function

const fareDoubler = createFareMultiplier(2)
//declare a variable that will be assigned the createFareMultiplier with an argument of 2. This will then allow fareDoubler to be invoked with an argument that will automatically be doubled by the given argument
//
const fareTripler = createFareMultiplier(3)
//same as fareDoubler but uses 3 as the multiplier argument

const selectDifferentDrivers = function (drivers, driverFunction){
      return driverFunction(drivers)
}

//declare a variable selectDifferentDrivers.
//this variable will be assigned a function that accepts 2 arguments. The first argument will be a collection of drivers, the 2nd argument will be either the returnFirstTwoDrivers or returnLastTwoDrivers functions. Setup the the function to use both of these arguments so that the 2nd argument uses the 1st argument to perform the intended action of the 2nd argument function.
