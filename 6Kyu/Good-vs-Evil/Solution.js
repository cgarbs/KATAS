const goodVsEvil = (good, evil) => {
    let goodWorth = [1, 2, 3, 3, 4, 10]
    let evilWorth = [1, 2, 2, 2, 3, 5, 10]
    
    good = good.split(' ').map(Number).map((x, i) => x * goodWorth[i]).reduce((a, b) => a + b);
    evil = evil.split(' ').map(Number).map((x, i) => x * evilWorth[i]).reduce((a, b) => a + b);;
  
    return evil > good ? 'Battle Result: Evil eradicates all trace of Good' 
      : evil == good ? 'Battle Result: No victor on this battle field'
      : 'Battle Result: Good triumphs over Evil';
  }