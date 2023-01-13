const longestRepetition = (s) => {
  if(s === '') return [ '', 0]
  let result = [s[0], 1]
  let count = 1;
  s = s.split('')
  
  for(let i = 1; i < s.length; i++) {
    if(s[i] == s[i-1]) {
      count++
      if(count > result[1]) {
        result = [s[i], count]
      }
    } else {
      count = 1
    }
  } return result
}

//OR

const longestRepetition = s => (s.match(/(.)(\1*)/g) || []).reduce((a,e) => e.length > a[1] ? [e[0],e.length] : a,['',0]);