function ageInDays(year, month, day){
    const today = new Date();
    const input = new Date(year, month - 1, day)
    const result = today - input;
    const days = Math.floor(result / (1000*60*60*24));
    //Your Magnificent Code here
    // Note that month == 1 means January (in contrast to JavaScripts Date where the month is zero based)
    return `You are ${days} days old`;
  
  }