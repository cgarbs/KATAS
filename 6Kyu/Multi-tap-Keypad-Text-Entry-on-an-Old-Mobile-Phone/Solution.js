function presses(phrase) {
    const one = ['1', 'A', 'D', 'G', 'J', 'M', 'P', 'T', 'W', ' '];
    const two = ['B', 'E', 'H', 'K', 'N', 'Q', 'U', 'X', '*', '0', '#'];
    const three = ['C', 'F', 'I', 'L', 'O', 'R', 'V', 'Y'];
    const four = ['2', '3', '4', '5', '6', '8', 'S', 'Z'];
    const five  = ['7', '9'];
    
    const test = phrase.toUpperCase();
    let count = 0;
    
    for(let i = 0; i < test.length; i++) {
      count = one.includes(test[i])
      ? count + 1
      : two.includes(test[i])
      ? count + 2
      : three.includes(test[i])
      ? count + 3
      : four.includes(test[i])
      ? count + 4
      : count + 5;
    } return count;
  }