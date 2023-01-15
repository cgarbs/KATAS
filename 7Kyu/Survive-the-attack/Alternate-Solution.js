function hasSurvived(a, d){
    const aStart = a.reduce((val, acc) => acc + val, 0);
    const dStart = d.reduce((val, acc) => acc + val, 0);
  
    let dAfterFight = d.filter((el, idx) => 0 < el - a[idx]).length;
    let aAfterFight = a.filter((el, idx) => 0 < el - d[idx]).length;
    
    if (dAfterFight > aAfterFight)    return true;
    if (dAfterFight === aAfterFight)  return dStart >= aStart;
    return false;
  }