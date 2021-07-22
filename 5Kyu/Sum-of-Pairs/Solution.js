sumPairs = (ints, s) => {
  array = []
  sum = []
  for(let x = 0; array.length < ints.length; x++) {
    array.push(ints[x])
    for(let i = 0; i < array.length; i++) {
      for(let j = i + 1; j < array.length; j++) {
        if(array[i] + array[j] === s) {
          sum.push(array[i],array[j])
          return sum;
        }
      }
    }
  }
}

// Solution passes all tests but does not complete long list tests
// (execution time out)

sumPairs = (ints, s) => {
  let numSet = new Set()
  numSet.add(ints[0])
  for (let i = 1; i < ints.length; i++){
    let pair = s - ints[i]
    if(numSet.has(pair)) {
      return [pair, ints[i]]
    }
    numSet.add(ints[i])
  }
}