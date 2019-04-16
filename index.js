// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  let first_two = []
  first_two.push(drivers[0])
  first_two.push(drivers[1])
  return first_two
}

const returnLastTwoDrivers = function(drivers) {
  let last_two = []
  last_two.push(drivers[2])
  last_two.push(drivers[3])
  return last_two
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  if (int === 2) 
  {return fareDoubler}
  else if (int ===3)
  {return fareTripler}
  else (int === 5)
  {return fareQuintupler}
}

const fareDoubler = function(fare) {
  result = fare * 2;
  return result
}

const fareTripler = function(fare) {
  result = fare * 3;
  return result
}

const fareQuintupler = function(fare) {
  result = fare * 5;
  return result
}

const fetchSpecifiedDrivers = function(drivers, funct) {
  new_drivers = funct(drivers);
  return new_drivers
}

