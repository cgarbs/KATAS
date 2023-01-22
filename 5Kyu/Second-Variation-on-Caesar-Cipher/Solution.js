const encodeStr = (s, shift) => {
  const rotate = s[0].toLowerCase() + String.fromCharCode(s[0].toLowerCase().charCodeAt(0) + shift)
  const encoded = s.split('').map((e) => e.charCodeAt(0)).map((e) => e < 64 ? String.fromCharCode(e) : String.fromCharCode(e + shift))

  encoded.unshift(rotate[1])
  encoded.unshift(rotate[0])

  const chunkSize = Math.ceil(encoded.length / 5);
  const newArray = []

  for(let i = 0; i < encoded.length; i += chunkSize) {
    let chunk = encoded.slice(i, i + chunkSize);
    newArray.push(chunk.join(''))
  }
    return newArray
}

function decode(arr) {
  const array = arr.join('').split('')
  const prefix = array.shift() + array.shift()
  const shift = prefix.charCodeAt(1) - prefix.charCodeAt(0)

  const decoded = array.map((e) => e.charCodeAt(0)).map((e) => e < 64 ? String.fromCharCode(e) : String.fromCharCode(e - shift)).join('');
  return decoded
}