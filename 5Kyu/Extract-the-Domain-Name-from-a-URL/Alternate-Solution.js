function domainName(url){
    let arr = url.split('http://').join('')
    let arr2 = arr.split('https://').join('')
    let arr3 = arr2.split('www.').join('')
    let result = arr3.split('')
    for(let i = 0; i < result.length; i++) {
      if(result[i] === '.') {
        result.splice(i)
      }
    } return result.join('')
  }

  //OR

  function domainName(url){
    return  url.replace('http://', '')
               .replace('https://', '')
               .replace('www.', '')
               .split('.')[0];
  }

  //OR

  function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
  }