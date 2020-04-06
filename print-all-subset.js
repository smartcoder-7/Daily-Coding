//given an array, find all the subsets
//sample input [1, 2] => {}, {1}, {2}, {1, 2}

function findAllSubsets(input) {
  const subset = Array(input.length).fill(null);
  return helper(input, subset, 0);
}

function printSubset(subset) {
  console.log(subset.filter(element => element !== null).join(','));
}
function helper(input, subset, i) {
  if (i === input.length) {
    printSubset(subset);
    return;
  }
  subset[i] = null;
  helper(input, subset, i + 1);
  subset[i] = input[i];
  helper(input, subset, i + 1);
}

findAllSubsets([1, 2]);
