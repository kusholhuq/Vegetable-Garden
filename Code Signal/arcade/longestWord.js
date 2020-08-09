function longestWord(text) {
  //split at every space
  //decount all special characters

  //loop through whole string and just remove all special characters
  //by making a copy of it excluding special chars
  let newString = '';
  for (let b = 0; b < text.length; b++) {
    if (text[b] === ',' || text[b] === '.' || text[b] === '<' || text[b] === '>' || text[b] === '/' || text[b] === '\\' || text[b] === '[' || text[b] === ']' || text[b] === '(' || text[b] === ')' || text[b] === '{' || text[b] === '}' || text[b] === '!' || text[b] === '?' || text[b] === '-' || text[b] === '_' || text[b] === ' ') {
      newString += " ";
    } else {
      newString += text[b];
    }
  }

  console.log("newString:", newString);

  const stringArray = newString.split(" ");
  console.log(stringArray);

  let word = '';
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > word.length) {
      word = stringArray[i];
    }
  }
  return word;
}
