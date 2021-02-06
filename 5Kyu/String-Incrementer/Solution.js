function incrementString (strng) {
    const array = [];
    for (let i = 0; i < strng.length; i++) {
      if(strng[i] === '0' ||
        strng[i] === '1' ||
        strng[i] === '2' ||
        strng[i] === '3' ||
        strng[i] === '4' ||
        strng[i] === '5' ||
        strng[i] === '6' ||
        strng[i] === '7' ||
        strng[i] === '8' ||
        strng[i] === '9') {
          array.push(strng[i]);
        }
      } const newStr = strng.substring(0, strng.length - array.length);
      console.log(newStr);
      console.log(array);
      let ci = array.length - 1;
        for (let j = array.length - 1; j >= 0; j--) {
           if (array[ci] === '9') {
              array[ci] = '0';
              ci--
          } else {
              array[ci]++;
              j = 0;
          }
        } console.log(array);
        const isZero = (currentValue) => currentValue === '0';
        if (array.every(isZero)) {
          array.unshift('1');
        } console.log(array);
        const newArray = array.join('');
        const incrementedString = newStr.concat(newArray);
        return incrementedString
      }

// Is refactoring possible in this approach?