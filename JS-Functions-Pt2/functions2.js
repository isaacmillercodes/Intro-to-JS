// Define a function called oldestPerson that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.

//1. create ages object
//2. function that checks age values in object
//3. Check which age is highest
//4. Print name of highest age

var ages = {
  "Chuck": 22,
  "Brian": 46
}

function oldestPerson(ageList) {
  var allAges = [];
  for (var x in ageList) {
    allAges.push(ageList[x]);
  }
  var maxAges = Math.max.apply(null, allAges);

  for (var x in ageList) {
    if(ageList[x] === maxAges){
      console.log(x);
    }
  }
}

oldestPerson(ages);

//Define a function called longestWord that takes a string and returns the longest word in the string.



//Refactor the longestWord function so that it ignores punctuation.

//Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.

//Bonus: Write a function called palindrome that takes a string as an argument. Return true if the string is a palindrome, otherwise return false.

function palindrome(word) {
  word = word.toLowerCase().replace(" ","")
  if(word.split("").reverse().join("") === word) {
  return true;
} else {
  return false;
  }
}

console.log(palindrome("taco cat"));
