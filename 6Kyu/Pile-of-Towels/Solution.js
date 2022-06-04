const sortThePile = (pileOfTowels, weeklyUsedTowels) => {
  for(let i = 0; i < weeklyUsedTowels.length; i++) {
    let num = pileOfTowels.length - weeklyUsedTowels[i];
    let x = pileOfTowels.slice(0, num)
    let y = pileOfTowels.slice(num)
    pileOfTowels = x.concat(y.sort().reverse())
  }
  return pileOfTowels
}