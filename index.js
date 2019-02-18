const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(drivers, placement) {
  return placement(drivers);
};

//
// var friends = [“Mike”, “Stacy”, “Andy”, “Rick”];
//
// friends.forEach(function (eachName, index){
// console.log(index + 1 + “. ” + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
// });
