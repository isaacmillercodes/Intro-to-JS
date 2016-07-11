/*
Define a function called sum that takes two numbers as arguments and returns their sum. */

console.log("sanity check!");

function sum(num1, num2) {
  return num1 + num2;
}

var sumTotal = sum (1, 2);

console.log(sumTotal === 3);

/* Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.*/

console.log("///////////");

function isEqual (arg1, arg2) {
  if (arg1 === arg2) {
    return true;
  } else {
    return false;
  }
}

console.log(isEqual(1, 1)); //true
console.log(isEqual(1, 2)); //false
console.log(isEqual(1, "1")); //false
console.log(isEqual("one", "one")); //true

/*
Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent. */

console.log ("//////////");

function discountPercentage (itemPrice, discountAmount) {
  if (discountAmount > 0 && discountAmount < 100) {
    return itemPrice * ((100 - discountAmount)/100);
  } else {
    return "Warning";
  }
}

var newTotal = discountPercentage (1927, 30);

console.log("$" +
newTotal);

/*Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual word is separated by only one space.*/

/*Define a function called evenNumbers that takes an arbitrary integer as an argument, from 0 to 100, and outputs all the even integers from 0 to that arbitrary number.*/

/*Define a function called isDivisible that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.*/

/*Bonus: Write a function called oddNumbers that takes an arbitrary integer as an argument, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the arbitrary number. If the number is less than 40, output all the odd integers from 0 to 40.*/
