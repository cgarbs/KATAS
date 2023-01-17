const duplicateEncode = (word) => {
  let array = word.toLowerCase().split('')
  return array.map((e) => array.indexOf(e) === array.lastIndexOf(e) ? '(' : ')').join('');
}

//OR

const duplicateEncode = (word) => word.toLowerCase().split('').map((e, i, array) => array.indexOf(e) === array.lastIndexOf(e) ? '(' : ')').join('');

//OR

function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
  }