const transpose = (matrix) => {
    let result = [];
    for(let i = 0; i < matrix[0].length; i++) {
      let array = matrix.map((e) => e[i])
      result.push(array)
    }
   return result
  }

  // OR

const transpose = (matrix) => matrix[0].map((_, i) => matrix.map((e) => e[i]))