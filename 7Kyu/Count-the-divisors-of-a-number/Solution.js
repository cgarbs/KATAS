function getDivisorsCnt(n){
    let count = 0;
    for(let i = 0; i <= n; i++) {
      if(n % i == 0) {
        count++
      }
    } return count
}

//OR 

const getDivisorsCnt = (n) => {
    for(count = 0, i = 0; i <= n; i++) n % i === 0 && count++;
    return count;
  }