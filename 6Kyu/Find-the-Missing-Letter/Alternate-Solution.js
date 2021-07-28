function findMissingLetter(array)
{
   var i=array[0].charCodeAt();
   array.map(x=>  x.charCodeAt()==i?i++:i);
   return String.fromCharCode(i);
}

//OR

function findMissingLetter(array) {
    let i = array[0].charCodeAt(0);
    return String.fromCharCode(array.find(el => el.charCodeAt(0) != i++).charCodeAt(0) - 1);
  }