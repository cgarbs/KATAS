function mergesorted(a, b) {
    let arr = []
    while(a.length && b.length) {
      a[0] < b[0] ? arr.push(a.shift()) : arr.push(b.shift())
    }
  return arr.concat(a).concat(b)
  }
  