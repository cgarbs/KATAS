function hexStringToRGB(hexString) {
    const rgb = hexString.substring(1).match(/.{1,2}/g).map(x => parseInt(x, 16))
    const result = {
      r: rgb[0],
      g: rgb[1],
      b: rgb[2]
    }
    return result;
  }
  