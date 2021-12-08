function automorphic(n){
  //Silly solution
  let square = n * n;
  let length = n.toString().length
  console.log(n)
  let num = square.toString().slice(-length);
  console.log(num)
  if (n.toString() === square.toString().slice(-length)) {
      return "Automorphic"
    } else {
    return "Not!!"
  }
}