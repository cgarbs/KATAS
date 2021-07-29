function chessBoardCellColor(cell1, cell2) {
  const letters = "ABCDEFGH"
  const numbers = "12345678"
  const color = (x) => 
    letters.indexOf(x[0]) % 2 !== 0 && numbers.indexOf(x[1]) % 2 !== 0 ||
    letters.indexOf(x[0]) % 2 === 0 && numbers.indexOf(x[1]) % 2 === 0 ? 'black' : 'white'
  return color(cell1) === color(cell2)
}