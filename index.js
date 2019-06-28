const returnFirstTwoDrivers = function(array) {return array.slice(0, 2)};

const returnLastTwoDrivers = function(array) {return array.slice(-2)};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
    return function(fare) {
        return integer*fare;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(arrayOfDrivers, cb) {
  return cb(arrayOfDrivers);
}
