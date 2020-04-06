// code challenge problem in the facebook interview
// a -> 1, b -> 2 ... z -> 26, given string of numbers as input data, how many way are there in decoding to the string?
// solution('12') => 'ab', or 'l' solution('01') => 0

function helper(data, k) {
  if (k === 0) return 1;
  let s = data.length - k;
  if (data[s] === '0') return 0; // if starting point is zero, return zero

  let result = helper(data, k - 1);
  if (k >= 2 && Number(data.slice(s, s + 2))) {
    result += helper(data, k - 2);
  }

  return result;
}

function solution(input) {
  return helper(input, input.length);
}

function helperWithDP(data, k, memo) {
  if (k === 0) return 1;
  let s = data.length - k;

  if (data[s] === '0') return 0; // if starting point is zero, return zero
  if (memo[k] !== null) return memo[k];

  let result = helperWithDP(data, k - 1, memo);
  if (k >= 2 && Number(data.slice(s, s + 2))) {
    result += helperWithDP(data, k - 2, memo);
  }

  memo[k] = result;
  return result;
}

function solutionWithDP(input) {
  const memo = Array(input.length + 1).fill(null);
  helperWithDP(data, k, memo);
}

console.log(solution('12'));
