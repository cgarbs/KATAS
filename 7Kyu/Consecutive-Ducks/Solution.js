function consecutiveDucks(num) {
    return !Number.isInteger(Math.log2(num));
  }

//   OR

function consecutiveDucks(num) {
    while(num > 2){
      if(num % 2 != 0) return true
      num = num / 2;
    }
    return false
  }