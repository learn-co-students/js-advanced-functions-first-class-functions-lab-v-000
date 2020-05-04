function returnFirstTwoDrivers(drivers){
  const myFunc = function() {
      return [drivers[0], drivers[1]];
  };
return myFunc();
}

function returnLastTwoDrivers(drivers){
  const myFunc = function() {
      return drivers.slice(-2);
  };
return myFunc();
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(){
  return function(num){
    return num * num
  };
}

const fareDoubler = function fareDoubler(num){
    return num * 2
  }

const fareTripler = function fareTripler(num){
      return num * 3
  }

function selectDifferentDrivers(drivers,fn){
  return fn(drivers)
}
