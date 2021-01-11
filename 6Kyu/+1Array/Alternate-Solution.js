function upArray(arr) {
    let newArr = BigInt(arr.join('')) + 1n;
    return newArr.toString().split('').map(Number);
  }

// Simple solution, however Kata does not support BigInt.


const BigNumber = require('bignumber.js');

const upArray = arr =>
  arr.length === 0 || arr.filter(x => x < 0 || x > 9).length > 0
    ? null
    : (new BigNumber(arr.join('')).plus(1))
        .toPrecision()
        .split('')
        .map(Number);

// This solution uses a JS library.