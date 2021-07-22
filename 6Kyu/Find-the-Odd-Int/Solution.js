function findOdd(A) {
  let count = 0;
  for(let i = 0; i < A.length; i++) {
    for(let j = 0; j < A.length; j++) {
      if(A[j] === A[i]) {
        count++
      }
    }
    if(count % 2 !== 0) {
    return A[i];
    }
  }
}

//OR

function findOdd(A) {
  let arr = A.sort((a,b) => a - b)
  console.log(arr)
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i+1]) {
      count++
    } else {
      if(count % 2 === 0) {
        count = 1
      } else {
        return arr[i]
      }
    }
  }
}