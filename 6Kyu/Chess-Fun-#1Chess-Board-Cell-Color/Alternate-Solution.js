function chessBoardCellColor(cell1, cell2) {
    return squareColor(cell1) == squareColor(cell2);
  }
  
  function squareColor(name) {
    return name.charCodeAt(0) + name.charCodeAt(1) & 1;
  }

  //OR

  const chessBoardCellColor = (a, b, s = '0ABCDEFGH') => (s.indexOf(a[0]) + +a[1]) % 2 === (s.indexOf(b[0]) + +b[1]) % 2;

  //OR

  const chessBoardCellColor = (cell1, cell2) =>
  (cell1.charCodeAt(0) + +cell1[1]) % 2 === (cell2.charCodeAt(0) + +cell2[1]) % 2;

