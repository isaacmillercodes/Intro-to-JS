/*
//Problem 1
for (var i = 0; i <= 1000; i += 100) {
  console.log(i);
}
//Problem 2
for (var i = 1; i <= 128; i *= 2) {
  console.log(i);
}
//Problem 3
for (var i = 0; i <= 10; i += 2) {
  console.log(i);
}
//Problem 4
for (var i = 3; i <= 15; i += 3) {
  console.log(i);
}
//Problem 5
for (var i = 9; i >= 0; i--) {
  console.log(i);
}
//Problem 6
var count = 1
while (count <= 4) {
  for (var i = 1; i < 4; i++) {
  console.log(count);
  }
  count++
}
//Problem 7
for (var n = 0; n < 4; n++) {
  for (var i = 0; i <= 4; i++) {
    console.log(i);
  };
}

//Program 1
for (var i = 1; i <=25; i++) {
  if (i % 2 === 0) {
    console.log(i + " even");
  } else {
    console.log(i + " odd");
  }
}

//Program 2
for (var i = 1; i <=50; i++) {
  if (i % 3 === 0 && i % 5 === 0) { console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0){
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Program 3
var multipleSum = 0;
for (var i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    multipleSum += i;
  }
}
console.log(multipleSum)
*/
//Program 4
var empty = "";
var pound = "#"
for (var i = 0; i <= 7; i++) {
  console.log(empty += pound);
}
