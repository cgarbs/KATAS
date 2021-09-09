var numberToPrice = function(n) {
    return typeof n != 'number' ? 'NaN' : n.toFixed(3).replace(/\d$/, '').replace(/(\d)(?=(?:\d{3})+\.)/g, '$1,')
 }

 //OR

 var numberToPrice = function(number) {
    return Number.isFinite(number) && `${number.toLocaleString().split('.')[0]}${number.toFixed(3).slice(-4, -1)}` || 'NaN'
  }