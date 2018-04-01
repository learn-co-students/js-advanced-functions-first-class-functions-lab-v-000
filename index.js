const returnFirstTwoDrivers = function returnFirstTwoDrivers(list){
  let newList= []
  newList.push(list[0]);
  newList.push(list[1]);
  return newList;
};

const returnLastTwoDrivers = function returnLastTwoDrivers(list){
  let newList= []
  newList.push(list[list.length-2]);
  newList.push(list[list.length-1]);
  return newList;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
  return function fareMultiplier(fare){
    return fare*num;
  };
};

function fareDoubler(fare){
  return createFareMultiplier(2)(fare);
};

function fareTripler(fare){
  return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers(list, fn){
  return fn(list);
};
