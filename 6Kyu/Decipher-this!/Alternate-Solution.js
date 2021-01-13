const decipherThis = str => str.replace(/\b(\d{2,3})(\w?)(\w*?)(\w?)\b/g, (_, num, second, middle, last) => String.fromCharCode(num) + last + middle + second);

// OR

function decipherThis(str) {
    return str.split(" ")
      .map(i =>
        i.replace(/^\d+/, a => String.fromCharCode(a ))
         .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
      )
      .join(" ")
  }

  