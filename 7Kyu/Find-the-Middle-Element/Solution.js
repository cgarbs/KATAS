var gimme = function (inputArray) {
    let newArray = [...inputArray].sort((a, b) => a - b);;
    result = newArray[1];
    return inputArray.indexOf(result);
  };