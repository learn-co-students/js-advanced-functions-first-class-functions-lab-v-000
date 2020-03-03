const returnFirstTwoDrivers = 
  function(drivers_array) {
    return drivers_array.slice(0, 2);
  }

const returnLastTwoDrivers =
  function(drivers_array) {
      return drivers_array.slice(-2)
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier 
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversSlice){
    return driversSlice(drivers);
};