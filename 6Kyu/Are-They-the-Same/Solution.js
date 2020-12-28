function comp(array1, array2){
    if(array1 == null || array2 == null) return false;
    if(array1.length == 0 && array2.length == 0) {
      return true;
    } else {
      array1.sort((a, b) => a - b, 0);
      array2.sort((a, b) => a - b, 0);
      let result = false;
      for(let i = 0; i < array1.length; i++) {
        if(array1[i] * array1[i] !== array2[i]) {
          return false;
        } else {
          result = true;
        }
      } return result;
    }
  }