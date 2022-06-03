function towerBuilder(nFloors) {
    let tower = ['*']
    if(nFloors === 1) return tower;
    for(let i = 0; i < nFloors - 1; i++) {
      tower.push(tower[i] + '**')
    } 
  
    let longest = tower[tower.length - 1].length - 1;
    let spaces = 0;
    
    for(let i = 0; i < tower.length - 1; i++) {
      spaces = ' '.repeat(longest / 2);
      tower[i] = spaces + tower[i] + spaces;
      longest = longest - 2;
    }
    return tower;
  }

  //OR

  const towerBuilder = (nFloors) => {
    let tower = [];
    for (let i = 0; i < nFloors; i++) {
      tower.push(" ".repeat(nFloors - i - 1)
                 + "*".repeat((i * 2)+ 1)
                 + " ".repeat(nFloors - i - 1));
    } return tower;
  }