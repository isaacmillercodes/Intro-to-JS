// /*function max(arr) {
//     return Math.max.apply(null, arr);
// }
// */
//
// //Mike's Solution
// function max(arr) {
//   var maxValue = arr[0];
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > maxValue) {
//       maxValue = arr[i];
//     }
//   }
//   return callback(maxValue);
// }
//
// module.exports = {
//   "max": max
// };
//
//
// //var test = function(result) {
// //  console.log(result);
// //};
//
// //max([1,2,3], test);
//
// /*var numbers = [23, 45, 3, 98, 14]
//
// console.log(max(numbers));*/

var numArray = [2, 4, 6, 8];

function each(array, fn) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(fn(array[i]));
  }
  return result;
}

// var squareArray = each(numArray, function(element) {
//   return element * element;
// });
//
// console.log(squareArray);
// console.log(numArray);

var movieArray = ["The Divergent Series: Allegiant", "Under the Gun", "Indiana Jones and the Raiders of the Lost Ark", "The Little Mermaid", "300: Rise of an Empire"];

// var pickMovie = each(movieArray, function(i) {
//   var chance = Math.random(0, movieArray.length);
//   return movieArray[chance];
//
//    return movieTitle(Math.floor(Math.random()*movieArray.length));
// });

//console.log(pickMovie);


//Phil's madLib solution
// function madLibString(nouns, verbs, fn) {
//   return "The " + fn(nouns) + " " + fn(verbs) + " the " + fn(nouns) + ".";
// }
//
// function randomize(array) {
//   return array[Math.floor(Math.random()* 10)];
// }
//
// var nounsArray = ["fowl", "carpet", "container", "whale", "developer", "hospital", "garage", "hot dog", "taco", "snowboarder"];
// var verbsArray = ["laughs", "insults", "punches", "eats", "codes", "washes", "flirts with", "fixes", "smells", "pets"];
//
// var madLib = madLibString(nounsArray, verbsArray, randomize);
//
// console.log(madLib);

//Ben's callback example

// var array = ['Bill', 'Bob', 'Betty'];
//
// function printStuff(array) {
//     for (var i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
//
// function each(array, fn) {
//     var result = [];
//     for (var i = 0; i < array.length; i++) {
//         result.push(fn(array[i]));
//     }
//     return result;
// }
//
// // each(array, function(element) {
// //     element += ' Johnson';
// //     console.log(element);
// // });
// //
// // console.log(array);
//
// var numArray = [2, 4, 6, 8];
//
// var newArray = each(numArray, function(num) {
//     return num * num;
// });
//
// console.log(newArray);
// console.log('numArray: ' + numArray);
