Functions Returning Functions Lab
---

## Objectives
1. Practice invoking functions assigned to a variable
2. Practice invoking functions stored in a data structure
3. Practice writing functions that return other functions
4. Practice passing a function to another function
5. Practice calling a function returned by another function

## Introduction
Functions are a very important part of JavaScript, and you will use them pretty much all of the time. Without functions,
we wouldn't get anything done!  In this lab, we'll take a look at how we can use first-class functions to pass around functions,
or return them.

+ `returnFirstTwoDrivers` - Declare this as a JavaScript constant that is assigned to a function.  The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
+ `returnLastTwoDrivers` - Declare this as a JavaScript constant that is assigned to a function.  The assigned function should accept an array of drivers as an argument and return the last two drivers in the array.
+ `selectingDrivers` - This is an array that whose elements are the two functions (`returnFirstTwoDrivers` and `returnLastTwoDrivers`) that we previously defined.  
+ `createFareMultiplier` - This is a higher order function that takes in an integer as an argument and returns a function that will multiply a fare for a ride accordingly.  So if `createFareMultiplier` receives an argument of `4`, it will return a function that takes in an argument of a fare, and quadruples that fare.
+ `fareDoubler` - This is a constant assigned to the return value value of the `createFareMultiplier` function.  The `fareDoubler` function will take an argument of a fare and double it.
+ `fareTripler` - This is a constant assigned to the return value value of the `createFareMultiplier` function.  The `fareTripler` function will take an argument of a fare and triple it.
+ `selectDifferentDrivers` - This function takes two arguments, an array of `drivers` as the first argument and either the `returnFirstTwoDrivers` function or the `returnLastTwoDrivers` as the second argument.  Based on these two arguments, the `selectDifferentDrivers` will return use the arguments to return either the first two drivers or the last two drivers.

## Resources

- [Wikipedia: First-class function](https://en.wikipedia.org/wiki/First-class_function)
- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [JavaScript is Sexy: Higher-Order Functions](http://javascriptissexy.com/tag/higher-order-functions/)

<p class='util--hide'>View <a href='https://learn.co/lessons/js-advanced-functions-first-class-functions-lab'>First Class Functions Lab</a> on Learn.co and start learning to code for free.</p>
