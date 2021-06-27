function deleteNth(arr,n) {
  let obj = {};
  return arr.filter(function(e) {
    obj[e] = (obj[e]||0) + 1;
    return obj[e] <= n;
  });
}