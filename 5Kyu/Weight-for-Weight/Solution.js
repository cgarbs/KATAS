const orderWeight = (strng) => {
  const weight = (x) => x.split('').map(Number).reduce((a,b) => a + b)
  return strng.split(" ").sort((a,b) => {
    return weight(a) === weight(b) ? a.localeCompare(b) : weight(a) - weight(b)
  }).join(' ')
}