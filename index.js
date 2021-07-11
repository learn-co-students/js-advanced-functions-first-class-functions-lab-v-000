const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiple) {
  return function multiply(fare) {
    return fare * multiple;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectingDrivers) {
  function shuffle(array1) {
    var ctr = array1.length, temp, index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = array1[ctr];
      array1[ctr] = array1[index];
      array1[index] = temp;
    }
    return array1;
  };
  let rand = shuffle(selectingDrivers);
  return rand(drivers);
};