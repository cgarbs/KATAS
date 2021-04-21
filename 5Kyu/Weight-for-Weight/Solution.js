function orderWeight(strng) {
    let num = strng.split("")
    let sum = num.reduce((a, b) => {
      return parseInt(a) + parseInt(b);
    }, 0);
    
    return sum
}

// Returns sum of just one number's digits.

// Must loop to return sum of all numbers' digits in an array.
// Returned array must dictate order of original array.
