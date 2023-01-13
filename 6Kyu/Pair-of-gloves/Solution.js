const numberOfPairs = (gloves) => {
  let count = {}
  for(const e of gloves) {
    count[e] = count[e] ? count[e] + 1 : 1;
  }
  return Object.values(count).map((e) => e % 2 === 0 ? e : e - 1 ).reduce((a,b) => a + b) / 2
}

// OR

numberOfPairs=a=>[...new Set(a)].map(b=>a.join``.split(b).length-1).reduce((a,b)=>a+(b>>1),0)