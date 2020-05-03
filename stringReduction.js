function stringReduction(str) {
  const len = str.length;
  let count = Array(3).fill(0);
  for (let i = 0; i < len; i += 1)
    count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;

  if (count[0] === len || count[1] === len || count[2] === len) {
    return len;
  }
  if (count[0] % 2 === count[1] % 2 && count[1] % 2 === count[2] % 2) return 2;
  return 1;
}

console.log(stringReduction('abc'));
