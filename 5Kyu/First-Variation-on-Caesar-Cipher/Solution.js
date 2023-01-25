const movingShift = (s, shift) => {

  let count = shift -1; 
  const encoded = s.split('').map((e) => e.charCodeAt(0)).map((e) => {
    count++;
    if(count - shift >= 26) {
      count = (shift - 1);
      count++;
      }
    return e < 64 ? String.fromCharCode(e) 
    : (e <= 122) && (e + count) > 122 ? String.fromCharCode(e + count - 26)
    : (e <= 90) && (e + count > 90) ? String.fromCharCode(e + count - 26)
    : String.fromCharCode(e + count)
  })

  const chunkSize = Math.ceil(encoded.length / 5);
  const newArray = []

  for(let i = 0; i < encoded.length; i += chunkSize) {
    let chunk = encoded.slice(i, i + chunkSize);
    newArray.push(chunk.join(''))
  }
  if(newArray.length === 4) newArray.push('')
  return newArray
}

const demovingShift = (arr, shift) => {
  const array = arr.join('').split('');
  let count = shift - 1
  const decoded = array.map((e) => e.charCodeAt(0)).map((e, i) => {
    count++
    if(count - shift >= 26) {
      count = shift - 1;
      count++;
      }
    return e < 64 ? String.fromCharCode(e) 
      : (e <= 91) && (e - count < 64) ? String.fromCharCode(e - count + 26)
      : (e >= 97) && (e - count < 97) ? String.fromCharCode(e - count + 26)
      : String.fromCharCode(e - count)
  }).join('')
  return decoded
}