const removeSmallest = (numbers) => {
  let arr = numbers.map(e => e)
  let smallest = Math.min(...arr)
  let i = arr.indexOf(smallest)
  arr.splice(i,1)
  return arr
}