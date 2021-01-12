const encryptThis = str => str.replace(/\b\w(\w?)(\w*?)(\w?)\b/g, (a,b,c,d) => a.charCodeAt() + d + c + b);

// OR

const encryptThis = text =>
  text.replace(/\b\w(\w?)(\w*?)(\w?)\b/g, (val, sec, mid, lst) => val.charCodeAt(0) + lst + mid + sec);

//   Both one liners utilizing replace.