// function sumPairs(ints, s) {
//   return [0, 0] || undefined;
// }

sumPairs = (ints, s) => {
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


let test = [10, 5, 5, 2, 6]
sumPairs(test, 10);

//Will return correct integers but not the correct solution.