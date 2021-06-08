// One-liners:

const coinCombo = cents =>
[cents % 25 % 10 % 5, cents % 25 % 10 / 5 ^ 0, cents % 25 / 10 ^ 0, cents / 25 ^ 0];

// OR

var coinCombo = c=> [c%25%10%5,Math.floor(c%25%10/5),Math.floor(c%25/10),Math.floor(c/25)];
