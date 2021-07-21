function pickPeaks(arr){
    const result = {
      pos: [],
      peaks: []
    }
    for(let i = 1; i < arr.length - 1; i++) {
      if(arr[i-1] < arr[i] && arr[i+1] < arr[i]) {
        result.peaks.push(arr[i])
        result.pos.push(i)
      }
      else if(arr[i-1] < arr[i] && arr[i+1] === arr[i]) {
        for(let j = i; j < arr.length; j++) {
          if(arr[j] < arr[i]) {
            result.peaks.push(arr[i])
            result.pos.push(i)
            break;
          } else if(arr[j] > arr[i]) {
            break;
          }
        }
      }
    }
    return result
  }