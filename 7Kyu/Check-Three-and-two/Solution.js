function checkThreeAndTwo(array) {
    let aCount = 0;
    let bCount = 0;
    let cCount = 0;
  
    for(e of array) {
      if(e === "a") {
        aCount++
      }
    }
     for(e of array) {
      if(e === "b") {
        bCount++
      }
    }
     for(e of array) {
      if(e === "c") {
        cCount++
      }
    } if((aCount === 2 || bCount === 2 || cCount === 2) && (aCount === 3 || bCount == 3 || cCount === 3)) {
      return true
    } else {
      return false;
    }
  }

  // Better way?