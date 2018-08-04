const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
  let size = drivers.length

  return drivers.slice(drivers.length - 2, drivers.length)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

function createFareMultiplier(multiplier) {
  return function fareMultiplier(multiplier) {
    return multiplier * 5
  }
}

function fareDoubler(fare) {
  return 2 * fare
}

function fareTripler(fare) {
  return 3 * fare
}

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers)
}
