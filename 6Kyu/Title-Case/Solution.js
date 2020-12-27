function titleCase(title, minorWords) {
    if (title === "") {
      return "";
    }
    let titleArray = title.toLowerCase().split(" ");
    if (minorWords !== undefined) {
      let minorWordsArray = minorWords.toLowerCase().split(" ");
      for(let i = 0; i < titleArray.length; i++) {
        if (minorWordsArray.indexOf(titleArray[i])  === -1) {
          titleArray[i] = titleArray[i][0].toUpperCase() + titleArray[i].substr(1);
        }
      } let newString = titleArray.join(" ");
        newString = newString[0].toUpperCase() + newString.substring(1);
        return newString;
    } else {
        for(let i = 0; i < titleArray.length; i++) {
          titleArray[i] = titleArray[i][0].toUpperCase() + titleArray[i].substr(1);
        } return titleArray.join(" ");
    } 
  }