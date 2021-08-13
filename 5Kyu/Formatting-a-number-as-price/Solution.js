//WORK IN PROGRESS
var numberToPrice = function(number) {
    console.log(number)
    if(typeof number !== number) NaN;
    let num = number.toString().split('.')
    num.length === 1 ? num.push('00') : 
    num[1].length === 1 ? num[1] = num[1] + '0' : 
    num[1] = num[1].slice(0, 2);
    let result = Number(num.join('.'))
    return (result).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }