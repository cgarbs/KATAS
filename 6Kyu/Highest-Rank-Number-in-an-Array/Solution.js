function highestRank(arr){
    let newArr = arr.sort((a,b) => a - b)
    return newArr.sort((a,b) =>
      newArr.filter(v => v===a).length
      - newArr.filter(v => v===b).length
      ).pop()
  }

// OR

function highestRank(arr){
    return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
  }