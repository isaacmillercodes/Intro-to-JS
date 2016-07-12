var input = [
  [11, 13],
  [0, 2]
];

input.reverse();

for (var i = 0; i < input.length; i++) {
  input[i].reverse();
}

//input reverse | for loop -> input reverse

var output = input[0].concat(input[1]);

console.log(output);
