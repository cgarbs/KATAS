function getAverage(marks){
   let total = 0;
    for(mark in marks) {
      total += marks[mark];
    } return Math.floor(total / marks.length);
  }