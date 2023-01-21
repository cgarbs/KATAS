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
  }  
  

 const decode = (arr) => {
}