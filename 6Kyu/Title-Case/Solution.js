// WORK IN PROGRESS

const string = "a clash of KINGS";
const string2 = "a an the of";


function titleCase(title, minorWords) {
  const titleArray = title.toLowerCase().split(" ");
  minorWordsArray = minorWords.toLowerCase().split(" ");
  console.log(titleArray);
  console.log(minorWordsArray);
}


titleCase(string, string2);