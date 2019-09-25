const returnFirstTwoDrivers = function(arr){
    return arr.slice(0,2);
  }


const returnLastTwoDrivers = function(arr){
    return arr.slice(-2);
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
  return function(fare){
    return fare * int
  };
}

function fareDoubler(fare){
    return fare * 2
  };

function fareTripler(fare){
    return fare * 3
  };

function selectDifferentDrivers(collection, subsetFunction){
  return subsetFunction(collection);
};
