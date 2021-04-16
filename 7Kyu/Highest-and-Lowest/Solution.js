function highAndLow(numbers){
    const first =  numbers.split(" ").map(e => Number(e))
    return `${Math.max(...first)} ${Math.min(...first)}`
  }