const duplicateCount = (text) => [...new Set(text.toLowerCase().split('').filter((e, i, array) => array.indexOf(e) !== array.lastIndexOf(e)))].length