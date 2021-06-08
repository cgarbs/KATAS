// Regular Expressions:

const solve = stones => stones.length - stones.replace(/(\w)(?=\1)/g, ``).length

// OR

const solve = stones =>
  --stones.match(/(.)(?=\1)|$/g).length;