//WORK IN PROGRESS
var numberToPrice = function(number) {
    let num = number.toString().split('.')
    let count = 0;
    //REGEX SOLUTION FOR NUM[0]?
    // for(let i = num[0].length - 1; i >= 0; i--) {
    //   console.log(i, count)
    //   count++
    //   if(count === 3) {
    //     num.push(num[0].substr(i,','))
    //   }
    // }
    num[1].length === 1 ? num[1] = '.' + num[1] + '0' : num[1] = '.' + num[1].slice(0, 2)
    return num[0]
  }
  
  
  numberToPrice(13253.5123)