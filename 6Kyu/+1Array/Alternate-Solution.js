function upArray(arr) {
    let newArr = BigInt(arr.join('')) + 1n;
    return newArr.toString().split('').map(Number);
  }

//   Simple solution, however Kata does not support BigInt.