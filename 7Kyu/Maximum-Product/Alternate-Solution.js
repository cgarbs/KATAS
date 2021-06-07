function adjacentElementsProduct(array) {
    let newArr = []
    for(i=0; i < array.length-1; i++){
      newArr.push(array[i]*array[i+1])
    }  
    return Math.max(...newArr)
  }

// OR

function adjacentElementsProduct(a) {
    return Math.max(...a.map((x,i)=>x*a[i+1]).slice(0,-1))
  }