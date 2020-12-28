function arrayDiff(a, b) {
    let a2 = [];
    for(let i = 0; i < a.length; i++) {
      if (b.indexOf(a[i]) === -1) {
        a2.push(a[i]);
      }
    } return a2;
  }