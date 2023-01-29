const multTriangle = (n) => {
  let array = []
  let result = []
  
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= i; j++) {
      array.push(i * j)
    } 
    result.push(array)
    array = []
  }
  
  console.log(result)
}


 multTriangle(3)