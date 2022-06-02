const interest = (P,r,n) => {
    let simple = Math.round((P * r * n) + P);
    let compound = P;
    for(let i = 1; i <= n; i++) {
      let interest = compound * r;
      compound += interest;
    }
    return [simple, Math.round(compound)]
  }

  //OR

const interest = (P,r,n) => [Math.round(P * (1 + r * n)), Math.round(P * Math.pow(1 + r, n))];