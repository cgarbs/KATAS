function findMissingLetter(array) {
    newArray = array.map(e => e.charCodeAt())
    for(let i = 0; i < newArray.length; i++) {
      if(newArray[i + 1] != newArray[i] + 1) {
        return String.fromCharCode(newArray[i] + 1)
      }
    }
  }

  //OR

  const findMissingLetter = (array) => {
    let i = array[0].charCodeAt(0);
    return String.fromCharCode(array.find(e => e.charCodeAt(0) !== i++).charCodeAt(0) - 1);
  }
