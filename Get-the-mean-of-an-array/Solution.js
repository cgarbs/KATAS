function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
   let total = 0;
    for(mark in marks) {
      total += marks[mark];
    } return Math.floor(total / marks.length);
  }