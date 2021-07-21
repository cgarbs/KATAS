function pickPeaks(arr){
    var result = {pos: [], peaks: []};
    if(arr.length > 2) {
      var pos = -1;
      for(var i=1; i<arr.length;i++){
        if(arr[i] > arr[i-1]) {
          pos = i;
        } else if(arr[i] < arr[i-1] && pos != -1) {
          result.pos.push(pos);
          result.peaks.push(arr[pos]);
          pos = -1;
        }
      }
    }
    return result;
  }

  //OR

  function pickPeaks(arr){
    var pos = arr.map((x,i)=>i > 0 ? Math.sign(x - arr[i-1]) * i : 0)
      .filter(i => i != 0)
      .filter((x,i,a) => i < a.length-1 && (a[i+1] < 0 && x > 0));
    return {pos:pos, peaks:pos.map(i=>arr[i])}
  }

  //OR

  const pickPeaks = arr =>
  (pos => ({pos, peaks: pos.map(val => arr[val])}))
  (arr.slice(1).map((val, idx) => Math.sign(val - arr[idx]) * ++idx).filter(val => val).filter((val, idx, arr) => val > 0 && arr[++idx] < 0));