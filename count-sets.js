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

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.time('recursive');
console.log(countSet(input, 6));
console.timeEnd('recursive');

//time complexity <= total*n*2 + 1 == O(n)
function countSetWithDP(input, total) {
  const memo = {};
  return dp(input, total, input.length - 1, memo);
}

function dp(input, total, i, memo) {
  const key = total + '' + i;
  let result;
  if (memo[key]) return memo[key];

  if (total === 0) return 1;
  if (total < 0) return 0;
  if (i < 0) return 0;
  if (total < input[i]) result = rec(input, total, i - 1, memo);
  result =
    rec(input, total - input[i], i - 1, memo) + rec(input, total, i - 1, memo);

  memo[key] = result;
  return result;
}

console.time('with-dp');
console.log(countSetWithDP(input, 6));
console.timeEnd('with-dp');
