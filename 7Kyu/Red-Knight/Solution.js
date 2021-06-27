function redKnight(N, P) {
    let knight = 0;
    for (let pawns = P; knight < pawns; pawns++) {
      knight = knight + 2;
      if (N == 0) {
        N = 1
      } else if (N == 1) {
        N = 0;
      }
    }
    return (N == 0) ? ["White", knight] : ["Black", knight]
  }

//   OR

const redKnight = (k, p) => [(p - k) % 2 ? 'Black' : 'White', 2 * p];