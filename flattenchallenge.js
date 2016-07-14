var input = [
  [10,15],
  [4,9]
];

function flatten(input) {
  input.reverse();
  for (var i = 0; i < input.length; i++) {
  input[i].reverse();
  }
  var output = input[0].concat(input[1]);
  console.log(output);
}
