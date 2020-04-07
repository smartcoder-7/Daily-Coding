// This problem was asked by Uber.
// Given an array of integers, return a new array such that each element at index i of the new array
//is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
//If our input was [3, 2, 1], the expected output would be [2, 3, 6].
// Follow-up: what if you can't use division?

/**
 *
 * @param {Array} input
 * @param {Number} index
 * @return {Number}
 */

function solution(input) {
  const len = input.length;
  const products = input.reduce(reducer, []);
  const reverseProducts = input
    .reverse()
    .reduce(reducer, [])
    .reverse();
  console.log(products, reverseProducts);

  const result = input.reduce((acc, _, index) => {
    let sum = 0;
    for (let i = 0; i < index; i += 1) sum += products[i];
    for (let j = index; j < len; j += 1) sum += reverseProducts[j];
    console.log(sum, acc);
    acc.push(sum);

    return acc;
  }, []);

  return result;
}

function reducer(acc, current, index) {
  if (index === 0) {
    acc.push(current);
    return acc;
  }
  acc.push(acc[index - 1] * current);
  return acc;
}

const input = [1, 2, 3, 4, 5];

console.log(solution(input));
