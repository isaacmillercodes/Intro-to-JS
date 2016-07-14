any([ 8, 9, 10, 11 ], greaterThan10);
surprise()();
filter([ 1, 2, 3, 4 ], onlyOdd);
sumTwoNumbers(3)(9);

// any and greaterThan10 definitions

function any(arr, cbFn) {
  for (var i = 0; i < arr.length; i++) {
    if (greaterThan10(arr[i])) {
      console.log(true);
    }
  }
  return false;
}

function greaterThan10 (num) {
  if (num > 10) {
    return true;
  } else {
    return false;
  }
}

// surprise definition


function surprise() {
  return function() {
    return ("surprise!");
  }
}

console.log(surprise()());


// filter and onlyOdd definition

function filter(arr, cbFn) {
  var oddNum = [ ];
  for (var i = 0; i < arr.length; i++) {
    if (onlyOdd(arr[i]) === true) {
      oddNum.push(arr[i]);
    }
  }
  console.log(oddNum);
};


function onlyOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

// sumTwoNumbers definition

function sumTwoNumbers(n1){
  return function(n2){
    console.log(n1 + n2);
  };
}
