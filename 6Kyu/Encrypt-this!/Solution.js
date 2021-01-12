var encryptThis = function(text) {
    let array = text.split(" ");
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
      let x = array[i].split("");
      [x[1], x[x.length - 1]] = [x[x.length - 1], x[1]];
      x[0] = x[0].charCodeAt();
      newArray.push(x.join(''));
    } return newArray.join(' ');
  }