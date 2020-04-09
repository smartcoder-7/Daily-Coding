// This problem was asked by Stripe.

// Given an array of integers, find the first missing positive integer in linear time and constant space.
//In other words, find the lowest positive integer that does not exist in the array.
//The array can contain duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

function findMissingPositive(input) {
  let min = 1;
  let possibleValues = new Set();

  for (let i = 0; i < input.length; i += 1) {
    if (input[i] > min) {
      possibleValues.add(input[i]);
    } else if (min === input[i]) {
      min += 1;

      while (possibleValues.has(min)) {
        possibleValues.delete(min);

        min += 1;
      }
    }
  }

  return min;
}

function solutionWithObject(input) {
  const possibleValues = input.reduce((acc, current, index) => {
    if (current > 0) acc[current] = acc[current] + 1 || 1;
    return acc;
  }, {});

  let index = 1;
  while (1) {
    if (!possibleValues[index]) {
      return index;
    }

    index += 1;
  }
}

const input1 = [2, 3, -7, 6, 8, 1, -10, 15];
const input2 = [1, 1, 1, 0, -1, -2];

console.time('set method used');
console.log(findMissingPositive(input1));
console.log(findMissingPositive(input2));
console.timeEnd('set method used');

console.time('hash method used');
console.log(solutionWithObject(input1));
console.log(solutionWithObject(input2));
console.timeEnd('hash method used');
