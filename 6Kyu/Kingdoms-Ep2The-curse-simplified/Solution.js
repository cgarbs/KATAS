const translate = (speech, vocabulary) => {
    let punctuations = /[.,:!?]/g;
    let sentence = speech.replace(punctuations, " $&").split(' ')
}  