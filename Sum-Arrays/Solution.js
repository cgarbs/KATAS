// Sum Numbers
function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }

// OR

// Sum Numbers
sum = function (numbers) {
    "use strict";
    var total = 0;
    for(var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  };