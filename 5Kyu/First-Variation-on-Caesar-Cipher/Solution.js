const movingShift = (s, shift) => {

    let count = shift -1; 
    const encoded = s.split('').map((e) => e.charCodeAt(0)).map((e) => {
      count++;
      if(count - shift >= 26) count = 1;
      return e < 64 ? String.fromCharCode(e) 
      : (e + count) > 122 ? String.fromCharCode(e + count - 26)
      : String.fromCharCode(e + count)
    })
  
    const chunkSize = Math.ceil(encoded.length / 5);
    const newArray = []
  
    for(let i = 0; i < encoded.length; i += chunkSize) {
      let chunk = encoded.slice(i, i + chunkSize);
      newArray.push(chunk.join(''))
    }
    return newArray
  }

  //Work in progress.