function solve(stones) {
    let count = 0;
    const array = stones.split("")
    for(let i = 0; i < array.length; i++) {
      if (array[i + 1] === array[i]) {
        array.splice(array.indexOf(array[i + 1]), 1)
        count++
        i = i - 1;
      }
    }
    return count;
  }

//   OR

function solve(stones) {
    let count = 0
    for (let i = 1; i <= stones.length; i++) {
      if (stones[i] === stones[i-1]) { count++ }
    }
    return count
  }