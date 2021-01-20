function mxdiflg(a1, a2) {
    if(a1.length === 0 || a2.length === 0) return -1;
    const min1 = a1.sort((a,b) => a.length - b.length)[0].length;
    const max1 = a1.sort((a,b) => a.length - b.length)[a1.length-1].length;
    const min2 = a2.sort((a,b) => a.length - b.length)[0].length;
    const max2 = a2.sort((a,b) => a.length - b.length)[a2.length-1].length;
    return (max1 - min2 > max2 - min1 ? max1 - min2 : max2 - min1)
    }