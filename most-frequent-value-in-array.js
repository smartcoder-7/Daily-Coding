// find the most an element most frequently appears in an array
// sample input [1, 1, 2, 3, 5, 2, 1], output has to be 1

function findMostFrequentElement(A) {
  if (!A.length) return null;

  A.sort((a, b) => a - b);

  let tempMax = -1;
  let value = null;
  let count = 1;
  for (let i = 1; i < A.length; i += 1) {
    if (A[i] === A[i - 1]) {
      count += 1;
    } else {
      if (count > tempMax) {
        tempMax = count;
        value = A[i - 1];
      }
      count = 1;
    }
  }

  return value;
}

console.log(
  findMostFrequentElement([
    1,
    5,
    1,
    2,
    3,
    5,
    5,
    5,
    2,
    1,
    2,
    0,
    5,
    2,
    6,
    7,
    5,
    2,
  ]),
);
