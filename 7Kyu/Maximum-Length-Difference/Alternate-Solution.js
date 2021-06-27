// MINE
function mxdiflg(a1, a2) {
    if(a1.length === 0 || a2.length === 0) return -1;
    let min1 = Math.min.apply(Math, a1.map(str => str.length));
    let max1 = Math.max.apply(Math, a1.map(str => str.length));
    let min2 = Math.min.apply(Math, a2.map(str => str.length));
    let max2 = Math.max.apply(Math, a2.map(str => str.length));
    return (max1 - min2 > max2 - min1 ? max1 - min2 : max2 - min1);
  }

// OR

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
  }

// One-liner w/ Math.abs

const mxdiflg = (a1, a2) =>
  a1.reduce((pre, val) => Math.max(pre, a2.reduce((p, v) => Math.max(p, Math.abs(val.length - v.length)), -1)), -1);