//WORK IN PROGRESS.

// function encodeStr(s, shift) {
//     let first = String.fromCharCode(s.charCodeAt(s[0]) + shift).toLowerCase()
//     let prefix = s[0].toLowerCase().concat(first)
//     let ascii = s.split('').map(x => x.charCodeAt(x) >= 65 && x.charCodeAt(x) <= 90 ? x.charCodeAt(x) + 1 : 
//                                       x.charCodeAt(x) >= 97 && x.charCodeAt(x) <= 122 ? x.charCodeAt(x) + 1 :
//                                       x.charCodeAt(x))
//     let encoded = ascii.map(x => String.fromCharCode(x))
//     let result = prefix.concat(encoded.join(''))
//     let x = Math.ceil(result.length / 5)
//     return result.match(new RegExp('.{1,' + x + '}', 'g'));
//   }  
  
//   function decode(arr) {
//       // your code
//   }


const encodeStr = (s, shift) => {
  const rotate = s[0].toLowerCase() + String.fromCharCode(s[0].toLowerCase().charCodeAt(0) + shift)
  const encoded = s.split('').map((e) => e.charCodeAt(0)).map((e) => e < 48 ? String.fromCharCode(e) : String.fromCharCode(e + shift))
  
    encoded.unshift(rotate[1])
    encoded.unshift(rotate[0])
    console.log(s.length)
    console.log(rotate)
    console.log(encoded)
    
  const chunkSize = Math.ceil(encoded.length / 5);
  const newArray = []
    
  for(let i = 0; i < encoded.length; i += chunkSize) {
    let chunk = encoded.slice(i, i + chunkSize);
    newArray.push(chunk.join(''))
  }
    console.log(newArray)
    return newArray
  }
  
  function decode(arr) {
      console.log(arr)
  }