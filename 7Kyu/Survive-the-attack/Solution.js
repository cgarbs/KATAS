const hasSurvived = (attackers, defenders) => {
    let aSurvivors = 0;
    let dSurvivors = 0;
    
    for(let i = 0; i < attackers.length || i < defenders.length; i++) {
      if(attackers[i] > defenders[i] || defenders[i] == undefined) {
        aSurvivors++
      } else if(defenders[i] > attackers[i] || attackers[i] == undefined) {
        dSurvivors++
      }
    }
    
    if(aSurvivors == dSurvivors) {
      let aPower = attackers.reduce((a, b) => a + b, 0)
      let dPower = defenders.reduce((a, b) => a + b, 0)
      if(aPower > dPower) {
        return false
      } else return true
    }
    
    return dSurvivors > aSurvivors