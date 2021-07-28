function list(names){
    if(names.length === 0) return '';
    if(names.length === 1) return names[0].name;
    let result = []
    for(let i = 0; i < names.length - 2; i++) {
      result.push(names[i].name + ", ") 
    } 
    result.push(names[names.length - 2].name)
    result.push(" & " + names[names.length - 1].name)
    result = result.join('')
    return result
  }  

  //OR

  var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")