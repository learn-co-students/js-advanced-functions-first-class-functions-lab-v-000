Functions Returning Functions Lab
---

## Objectives
1. Practice invoking functions assigned to a variable
2. Practice invoking functions stored in a data structure
3. Practice writing functions that return other functions
4. Practice passing a function to another function
5. Practice calling a function returned by another function

## Introduction
<<<<<<< HEAD

Previously, we've learned about how arrays work. We know that `push()` pushes elements onto the ends of arrays, and `pop()` pops them off; similarly, `unshift()` adds elements to the beginnings of arrays, and `shift()` pulls them off.

Now it's time to put what we've learned to the test.

## What's with all this destruction?

You might have noticed that our tests are looking for functions like `destructivelyAppendDriver()` — what's up with that?

We want to distinguish between actions that _mutate_ ("change") their underlying structures (like `pop()`, `push()`, `shift()`, and `unshift()`) and those functions that leave those structures untouched.

In general, it's good practice to avoid mutating a program's state whenever possible. So we want to call out these methods as destructive, since mutating state means we don't always know what we're dealing with. Indeed, these mutations mean that we need to refresh the test environment after every test to make sure that we're not working with mutated data!

By contrast, we also have methods like `appendDriver()`, which simply adds a driver to the end of the `drivers` array and returns the _new_ array, leaving the existing array untouched. This flow is preferable to mutating state because we have complete control over what's going into and coming out of the function.

## Run those tests!

You'll notice that the first test asks for an array called `drivers`, set to an initial value of `["Milo", "Otis", "Garfield"]`.

In our test file, we're going to reset this array to your initial value after every test. Some of our tests manipulate arrays in place, and we want to be sure that we can get back to a blank slate between tests.

Why is a blank slate important? We want our programs to be predictable: this makes them more robust, easier to maintain, and less prone to bugs. One way to achieve predictability is by isolating our tests from one another, meaning that no test should depend on the outcome or process of any other test. That way, tests can run in any order and test _known_ inputs and environments, rather than depending on other tests running first and modifying the entire environment.

Remember the workflow:

1. Run `learn-test`.

2. Read the errors; vocalize what they're asking you to do.

3. Write code; repeat steps 1 and 2 often until a test passes.

4. Repeat as needed for further tests.

5. Run `learn submit` when finished!

If you open up `test/indexTest.js`, you will see that in the `beforeEach` block we initialize our `driver` array values so that you can focus on what really matters — understanding how to manipulate arrays in JavaScript.
=======
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
>>>>>>> master

## Resources

- [Wikipedia: First-class function](https://en.wikipedia.org/wiki/First-class_function)
- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [JavaScript is Sexy: Higher-Order Functions](http://javascriptissexy.com/tag/higher-order-functions/)

<p class='util--hide'>View <a href='https://learn.co/lessons/js-advanced-functions-first-class-functions-lab'>First Class Functions Lab</a> on Learn.co and start learning to code for free.</p>
