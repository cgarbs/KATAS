function decipherThis(str) {
    let array = str.split(" ");
    let newArray = [];
    let newArray2 = [];
    for(let i = 0; i < array.length; i++) {
      let x = array[i].split(/([0-9]+)/) 
      x[1] = Number(x[1]);
      x[1] = String.fromCharCode(x[1]);
      newArray.push(x.join(''));
    } for(let i = 0; i < newArray.length; i++) {
      let y = newArray[i].split('');
      [y[1], y[y.length - 1]] = [y[y.length - 1], y[1]];
      newArray2.push(y.join(''));
    } return newArray2.join(' ');
  }; 