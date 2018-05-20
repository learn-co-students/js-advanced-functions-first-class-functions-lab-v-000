// Code your solution in this file!

  function returnFirstTwoDrivers (array) {
   const newarr = []
   newarr.push(array[0])
   newarr.push(array[1])
   return newarr
}

 const second = function returnLastTwoDrivers (array) {
   const newarr = []
   newarr.push(array[array.length - 2])
   newarr.push(array[array.length - 1])
   return newarr
}

const selectingDrivers = [first, second]