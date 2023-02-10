const squareDigits = (num) => Number(num.toString().split('').map((e) => Number(e) ** 2).join(''))

//OR 

// => +num.toString().split('').map(i => i*i).join('')