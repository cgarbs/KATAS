var palindromeChainLength = function(n) {
    let steps = 0;
   if (n.toString() === n.toString().split('').reverse().join('')) {
      return steps;
    } else {
      for (; n.toString() !== n.toString().split('').reverse().join(''); ) {
        let reverse = n.toString().split('').reverse().join('');
        let num = parseFloat(reverse);
        steps++;
        n = n + num;
      } return steps;
    }
  };