function automorphic(n){
  let len = n.toString().length
  let num = (n * n).toString().slice(-len)
  return (n == num) ? 'Automorphic' : 'Not!!'
}