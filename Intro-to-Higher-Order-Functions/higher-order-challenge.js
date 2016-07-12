function any (array) {
  for (var i = 0; i < array.length; i++) {
    var greaterThan10 = function (num) {
      if (num > 10) {
        return true
      } else {
        return false
      }
    }
  }
}

/*function greaterThan10 (num) {
  if (num > 10) {
    return true
  } else {
    return false
  }
}
*/
console.log(any([ 8, 9, 10, 11 ], greaterThan10));

/*
surprise()()

filter([ 1, 2, 3, 4 ], onlyOdd)

sumTwoNumbers(3)(9)

*/
