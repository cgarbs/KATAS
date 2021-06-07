function ageInDays(year, month, day){
    const today = new Date();
    const input = new Date(year, month - 1, day)
    const result = today - input;
    const days = Math.floor(result / (1000*60*60*24));
    return `You are ${days} days old`;
  }