//BEFORE

var replaceDots = function(str) {
    return str.replace(/./, '-');
  }

//AFTER

var replaceDots = function(str) {
    return str.replace(/\./g, '-');
  }

//OR 

const replaceDots = (str) => str.replace(/\./g, '-');