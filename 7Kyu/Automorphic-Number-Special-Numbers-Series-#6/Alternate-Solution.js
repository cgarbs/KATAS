const automorphic = n => String(n*n).endsWith(String(n)) ? "Automorphic" : "Not!!" ;

//OR

const automorphic = n => RegExp(`${n}$`).test(n**2) ? "Automorphic" : "Not!!";