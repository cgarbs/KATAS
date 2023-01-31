const multTriangle = (n) => {
  let array = []
  
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= i; j++) {
      j === i ? array.push(i * j) : array.push(i * j) && array.push(i * j)
    } 
  }
  
  return [
    array.reduce((a, b) => a + b, 0),
    array.reduce((a, b) => b % 2 === 0 ? a + b : a, 0),
    array.reduce((a, b) => b % 2 !== 0 ? a + b : a, 0)
  ]
}

// OR

const multTriangle = (n) => {
  const totalSum = (n * (n + 1) / 2) ** 2
  const oddSum = Math.ceil(n / 2) ** 4;
  return [totalSum, totalSum - oddSum, oddSum];
}