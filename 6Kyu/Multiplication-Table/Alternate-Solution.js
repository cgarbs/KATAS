multiplicationTable = function(size) {
    var result = [];
  
    for (var i = 0; i < size; i++) {
      result[i] = [];
      for(var j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    
    return result
  }

//   OR

multiplicationTable = function(size) {

    return Array.apply(null, new Array(size)).map(function(val, i) {
      return Array.apply(null, new Array(size)).map(function(val, j) {
        return (i+1) * (j+1);
      });
    });
  }

//   Array.apply?