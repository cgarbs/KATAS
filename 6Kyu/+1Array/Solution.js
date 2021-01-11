function upArray(arr) {
    if(arr.some(e => e < 0) || arr.some(e => e > 9) || arr.length === 0) return null;
    let i = arr.length - 1;
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[i] === 9) {
        arr[i] = 0;
        i--;
      } else {
        arr[i]++;
        j = 0;
      }
    } if(arr[0] === 0) arr.unshift(1);
      return arr;
}