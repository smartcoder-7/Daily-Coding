// find the most an element most frequently appears in an array
// sample input [1, 1, 2, 3, 5, 2, 1], output has to be 1

function findMostFrequentElement(A) {
  if (!A.length) return null;

  let sorted = A.concat().sort((a, b) => a - b);

  let tempMax = -1;
  let value = null;
  let count = 1;
  for (let i = 1; i < A.length; i += 1) {
    if (sorted[i] === sorted[i - 1]) {
      count += 1;
    } else {
      if (count > tempMax) {
        tempMax = count;
        value = sorted[i - 1];
      }
      count = 1;
    }
  }

  return value;
}

function solutionWithHash(A) {
  if (!A.length) return null;

  let hash = {};
  A.forEach(current => (hash[current] = hash[current] ? ++hash[current] : 1));

  let tempMax = -1;
  let value = null;

  Object.entries(hash).forEach((current, index) => {
    if (current[1] > tempMax) {
      tempMax = current[1];
      value = current[0];
    }
  });

  return value;
}

const input = [1, 5, 1, 2, 3, 5, 5, 5, 2, 1, 2, 0, 5, 2, 6, 7, 5, 2];
console.log(findMostFrequentElement(input));

console.log(solutionWithHash(input));
