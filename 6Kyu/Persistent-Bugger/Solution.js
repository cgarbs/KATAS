const persistence = (num) => {
    if(num <= 9) {
      return 0;
    }
    for(let i = 1; i < num; i++) {
      num = (''+num).split('').map((e) => +e).reduce((a,b) => a * b)
      if(num <= 9) {
        return i;
      }
    }
  }

  // OR

  const persistence = (num) => {
    for(var i = 0; num > 9; i++) {
      num = num.toString().split('').reduce((a, b) => a * b);
    }
    return i;
  }