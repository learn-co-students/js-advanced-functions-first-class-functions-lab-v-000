const returnFirstTwoDrivers = (array) => {
  return array.slice(0, 2);
}

const returnLastTwoDrivers = (array) => {
  return array.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return (fare) => int * fare;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, func) {
  return func(array);
}
