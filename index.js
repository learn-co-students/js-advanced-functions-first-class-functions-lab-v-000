// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (list) {
  return list.slice(0, 2);
};

const returnLastTwoDrivers = function (list) {
  let index = list.length;
  return list.slice(index - 2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(amount) {
  return function (amount) {
    return amount * amount;
  }
}

const fareDoubler = function (amount) {return amount * 2};

const fareTripler = function (amount) {return amount * 3};

function fetchSpecifiedDrivers(list, argument) {
 return argument(list);
}
