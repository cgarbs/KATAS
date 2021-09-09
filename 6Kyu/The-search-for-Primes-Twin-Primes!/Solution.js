const twinPrime = (n) => {
    if(n <= 2) return 0;
    let count = 0;
    for(let i = 0; i < n; i++) {
      if(primeNum(i) && primeNum(i+2)) {
        count++
        i += 2
      }
    } return count;
  }
  const primeNum = (x) => {
      if (x === 2) return true;
      if (x % 2 !== 0) {
          for (let i = 2; i <= x / 2; i++) {
              if (x % i === 0) {
                  return false;
              }
          } return true;
      } return false;
  }

//OR

const twinPrime = (n) => {
    if(n <= 2) return 0;
    let count = 0;
    for(let i = 0; i < n; i++) {
      if(primeNum(i) && primeNum(i+2)) {
        count++
        i += 2
      }
    } return count;
  }
  
  const primeNum = function(x) { 
    for (let i = 2; i * i <= x; i++) { if(x % i == 0) return false; } return true;
  }