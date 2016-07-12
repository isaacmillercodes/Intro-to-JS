/* var strLength = function (str) {
  return [str, str.length];
}



function printStrLength (strLength) {
  console.log("The phrase '" + strLength[0] + "' is " + strLength[1] + " characters long.")
}

printStrLength(strLength("isaac is rad"));


function listIt (items) {
  return items[0] + ': ' + items[1];
}

listIt([1, 'Zarya']);
// '1: Zarya'



var listItems = [
  [ 1, 'Zarya' ],
  [ 2, 'Mei' ],
  [ 3, 'Mercy' ],
];

function listIt (items) {
  return items[0] + ': ' + items[1];
}

function arrayList(items, listItFn) {
  var result = [];
  for (var i = 0; i < items.length; i++) {
    var pair = items[i];

    var formattedAsList = listItFn(pair);

    result.push(formattedAsList);
  }
  return result;
}

console.log(arrayList(listItems, listIt));

/*

var listItems = [
  [ 1, 'Zarya' ],
  [ 2, 'Mei' ],
  [ 3, 'Mercy' ],
];

function listIt (items) {
  return items[0] + ': ' + items[1];
}

function allTheThings (items, listItFn) {
  var result = [];
  for (var i = 0; i < items.length; i++) {
    // `pair` is an array of two items (e.g. [ 2, 'Mei' ])
    var pair = items[i];

    // `formattedAsList` is the two items, formatted (e.g. '2: Mei')
    var formattedAsList = listItFn(pair);

    // Now we take that result and push it into a final array
    result.push(formattedAsList);
  }

  return result;
}

console.log(allTheThings(listItems, listIt));
// [ '1: Zarya', '2: Mei', '3: Mercy' ]
*/
function map (array, callbackFn) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var item = callbackFn(array[i]);
    result.push(item);
  }

  return result;
}

var myArray = [10, 20, 30];

function add (num) {
  return function (input) {
    return input + num;
  }
}

console.log(map(myArray, add(1)));
