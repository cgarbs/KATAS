const findShort = (s) => s.split(' ').reduce((a, b) => a.length <= b.length ? a : b).length

// OR

const findShort = (s) => Math.min(...s.split(" ").map(s => s.length))