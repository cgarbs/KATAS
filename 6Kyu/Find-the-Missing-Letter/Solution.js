function findMissingLetter(array) {
    newArray = array.map(e => e.charCodeAt())
    for(let i = 0; i < newArray.length; i++) {
      if(newArray[i + 1] != newArray[i] + 1) {
        return String.fromCharCode(newArray[i] + 1)
      }
    }
  }