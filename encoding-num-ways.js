// code challenge problem in the facebook interview
// a -> 1, b -> 2 ... z -> 26, given string of numbers as input data, how many way are there in decoding to the string?
// solution('12') => 'ab', or 'l' solution('01') => 0

function helper(data, k) {
  if (k === 0) return 1;
  let s = data.length - k;
  if (data[s] === '0') return 0; // if starting point is zero, return zero

  result = helper(data, k - 1);
  if (k >= 2 && Number(data.slice(s, s + 2))) {
    result += helper(data, k - 2);
  }

  return result;
}

function solution(input) {
  return helper(input, input.length);
}

console.log(solution('12'));
