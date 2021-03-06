multiplicationTable = function (size) {
  let array = [[]];
  for (let i = 1; i <= size; i++) {
    array[0].push(i);
  }
  for (let n = 2; n <= size; n++) {
    array.push(array[0].map((e) => e * n));
  }
  return array;
};

// Likely not the most efficient, but possibly the simplest solution.
