function isprime(n){
    for(var i = 2; i < Math.sqrt(n) + 1; i++){
    if(n % i === 0)return false}
    return n > 1}
    
    function twinPrime(n) {
      return Array.from({length: n / 2}, (_, i) => i * 2 + 1).filter(x => isprime(x) && isprime(x + 2)).length
    }