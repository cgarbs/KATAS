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

  const demovingShift = (arr, shift) => {
    const array = arr.join('').split('');
    let count = shift - 1
    console.log(arr, shift)
    const decoded = array.map((e) => e.charCodeAt(0)).map((e, i) => {
      count++
      if(count + shift > 26) count = 0;
      console.log(e, i, count)
      return e < 64 ? String.fromCharCode(e) 
  //       : e === 100 ? String.fromCharCode(e - count)
        : e < 91 ? String.fromCharCode(e - count)
        : (e - count) < 97 ? String.fromCharCode(e - count + 26)
        : String.fromCharCode(e - count)
    }).join('')
    return decoded
  }



  // const movingShift = (s, shift) => {

  //   let count = shift -1; 
  //   const encoded = s.split('').map((e) => e.charCodeAt(0)).map((e) => {
  //     count++;
  //     if(count - shift >= 26) count = 1;
  //     return e < 64 ? String.fromCharCode(e) 
  //     : (e + count) > 122 ? String.fromCharCode(e + count - 26)
  //     : String.fromCharCode(e + count)
  //   })
  
  //   const chunkSize = Math.ceil(encoded.length / 5);
  //   const newArray = []
  
  //   for(let i = 0; i < encoded.length; i += chunkSize) {
  //     let chunk = encoded.slice(i, i + chunkSize);
  //     newArray.push(chunk.join(''))
  //   }
  //   return newArray
  // }
  
  // const demovingShift = (arr, shift) => {
  //   const array = arr.join('').split('');
  //   let count = shift - 1
  //   console.log(arr, shift)
  //   const decoded = array.map((e) => e.charCodeAt(0)).map((e, i) => {
  //     count++
  //     if(count + shift > 26) count = 0;
  //     console.log(e, i, count)
  //     return e < 64 ? String.fromCharCode(e) 
  // //       : e === 100 ? String.fromCharCode(e - count)
  //       : e < 91 ? String.fromCharCode(e - count)
  //       : (e - count) < 97 ? String.fromCharCode(e - count + 26)
  //       : String.fromCharCode(e - count)
  //   }).join('')
  //   return decoded
  // }
  