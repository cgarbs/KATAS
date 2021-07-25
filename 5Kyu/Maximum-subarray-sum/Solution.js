const maxSequence = (arr) => {
  const isNegative = (e) => e < 0;
  if(arr.length === 0 || arr.every(isNegative) === true) return 0;
  let max = arr[0];
  let min = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum - min > max) max = sum - min;
    if (sum < min) {
      min = sum;
    }
  } return max;
}