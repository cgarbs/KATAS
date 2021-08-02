function encodeStr(s, shift) {
    let first = String.fromCharCode(s.charCodeAt(s[0]) + shift).toLowerCase()
    let prefix = s[0].toLowerCase().concat(first)
    let ascii = s.split('').map(x => x.charCodeAt(x) >= 65 && x.charCodeAt(x) <= 90 ? x.charCodeAt(x) + 1 : 
                                      x.charCodeAt(x) >= 97 && x.charCodeAt(x) <= 122 ? x.charCodeAt(x) + 1 :
                                      x.charCodeAt(x))
    let encoded = ascii.map(x => String.fromCharCode(x))
    let result = prefix.concat(encoded.join(''))
    let x = Math.ceil(result.length / 5)

    // let re = new RegExp(/.test/) --> constructing new regular expression
    // console.log(result.match(/.{1,x}/g)) --> will return correct result if variable for length can be placed as quantifier
  }
  
  function decode(arr) {
      // your code
  }
  
  
  encodeStr("I should have known that you would have a perfect answer for me!!!", 1)
  //  ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"]

  //WORK IN PROGRESS

  // .match solution requires variable (length of the encoded message - the result) as a quantifier inside the regular expression
  // splice (most likely the most efficient method) and array loop are also possible solutions