/*function max(arr) {
    return Math.max.apply(null, arr);
}
*/

//Mike's Solution
function max(arr) {
  var maxValue = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return callback(maxValue);
}

module.exports = {
  "max": max
};


//var test = function(result) {
//  console.log(result);
//};

//max([1,2,3], test);

/*var numbers = [23, 45, 3, 98, 14]

console.log(max(numbers));*/
