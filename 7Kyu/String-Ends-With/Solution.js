function solution(str, ending){
  if (str.includes(ending, str.length - ending.length)) {
    return true;
  } else {
    return false;
  }
}