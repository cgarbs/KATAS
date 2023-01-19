const countBy = (x, n) => [...(new Array(n))].map((e, i) => x*(i+1))

//OR

const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)