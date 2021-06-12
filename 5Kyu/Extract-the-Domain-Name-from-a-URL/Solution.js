function domainName(url){
    const arr = url.split('');
    let output = []
    for(let i = 0; i < arr.length; i++) {
      if(i === "." && i + 1 === "c" &&& i + 2 === "o" && i + 3 "m") {
        // output.push(arr(all elements up to i)
      }
    }
  }


// for example:
domainName('http://github.com/cgarbs')


// TLD may be followed by multiple directories
// URL may or may not include HTTP, HTTPS or www
// Do tests include URLs without a protocol or prefix?
// Possible solution: parse from TLD backwards.