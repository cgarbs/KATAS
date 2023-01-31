const createPhoneNumber = (numbers) => {
  let string = numbers.join('')
  return `(${string.slice(0,3)})` + ` ${string.slice(3,6)}` + `-${string.slice(6)}`
}

// OR

const createPhoneNumber = (numbers) => `(${numbers.join('').slice(0,3)})` + ` ${numbers.join('').slice(3,6)}` + `-${numbers.join('').slice(6)}`\

// OR

const createPhoneNumber = (numbers) => numbers.reduce((a,b) => a.replace('x',b), "(xxx) xxx-xxxx");