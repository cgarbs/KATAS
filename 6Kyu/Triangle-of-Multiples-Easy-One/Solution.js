const multTriangle = (n) => {
  let multiples = []
  let array = []
  
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= i; j++) {
      j === i ? multiples.push(i * j) : multiples.push(i * j) && multiples.push(i * j)
    } 
    array.push(multiples)
    multiples = []
  }
  const result = []
  result[0] = array.flat().reduce((a, b) => a + b, 0)
  result[1] = array.flat().filter((e) => e % 2 === 0).reduce((a, b) => a + b, 0)
  result[2] = array.flat().filter((e) => e % 2 !== 0).reduce((a, b) => a + b, 0)

  return result
}

// Code works, but not inside codewars due to flat().