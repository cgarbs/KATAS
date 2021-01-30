function adjacentElementsProduct(array) {
    let multiplied = [];
    for(let i = 0, j = 1; i < array.length; i++, j++) {
      multiplied.push(array[i] * array[j]);
    } 
    multiplied.pop()
    return Math.max(...multiplied)
  }