//given a arrary of numbers, find the number of subsets whose values sum up to k;
//sample input [1, 2, 5, 2], k = 6, return value = 1;

//1. recursive solution from the last index
function countSet(input, total) {
  return rec(input, total, input.length - 1);
}

function rec(input, total, i) {
  if (total === 0) return 1;
  if (total < 0) return 0;
  if (i < 0) return 0;
  if (total < input[i]) return rec(input, total, i - 1);
  return rec(input, total - input[i], i - 1) + rec(input, total, i - 1);
}

const input = [2, 4, 6, 10];
console.log(countSet(input, 6));
