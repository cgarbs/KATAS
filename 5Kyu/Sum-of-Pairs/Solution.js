const sumPairs = (ints, s) => {
  sum = [];
  for(let i = 0; i < ints.length; i++) {
    for(let j = 0; j < ints.length; j++) {
      if(ints[i] + ints[j] === s) {
        sum.push(ints[i],ints[j])
        return sum;
      }
    }
  }
}

// Will return correct integers but not the correct solution.
// Must return the pair found first from the LEFT:
// 10                   // no pair
// 10, 5                // no pair adding to 10
// 10, 5, 2             // no pair adding to 10
// 10, 5, 2, 3          // no pair adding to 10
// 10, 5, 2, 3, 7       // a pair adding to 10: 3 + 7, done