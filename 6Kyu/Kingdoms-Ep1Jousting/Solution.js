const joust = (listField, vKnightLeft, vKnightRight) => {
    for(let i = 0; i < listField[0].length; i++) {
      if(listField[0].indexOf('>') >= listField[1].indexOf('<') || (vKnightLeft == 0 && vKnightRight == 0)) {
        return listField
      } else {    
        listField[0] = ' '.repeat(vKnightLeft) + listField[0].slice(0, listField[0].length - vKnightLeft);
        listField[1] = listField[1].slice(vKnightRight) + ' '.repeat(vKnightRight);
      }
    }
  }  