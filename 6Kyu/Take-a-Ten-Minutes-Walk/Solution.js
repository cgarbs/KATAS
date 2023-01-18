const isValidWalk = (walk) => {
    if(walk.length !== 10) return false;
    let x = 0, y = 0;
    for(let i = 0; i < walk.length; i++) {
      walk[i] === 'n' ? y++ 
      : walk[i] === 's' ? y-- 
      : walk[i] === 'e' ? x++
      : x--;
    } return x === 0 && y === 0;
  }