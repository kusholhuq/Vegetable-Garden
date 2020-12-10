function LongestWord(sen) {
  //lets strip out all unwanted punctuation
  //X convert whole string to an array
  //X loop through array
  //X if the item is one of the punctuation symbols
  //X remove it
  //X conver the array back to a string
  //X separate it into words
  //X create a storage for the longest word
  //loop through array
  //if the word is longer than the max store it as the longest word
  //return the stored max word
  //console.log("sen:", sen)
  const letterArray = sen.split("");
  //console.log("letterArray:", letterArray);
  for (let i = 0; i < letterArray.length; i++) {
    if (letterArray[i] === "!" || letterArray[i] === "@" || letterArray[i] === "#"
      || letterArray[i] === "$" || letterArray[i] === "%" || letterArray[i] === "^" ||
      letterArray[i] === "&" || letterArray[i] === "*" || letterArray[i] === "(" ||
      letterArray[i] === ")" || letterArray[i] === "," || letterArray[i] === "." ||
      letterArray[i] === "'" || letterArray[i] === '"' || letterArray[i] === "?"
      || letterArray[i] === "[" || letterArray[i] === "]" || letterArray[i] === ":"
      || letterArray[i] === ";" || letterArray[i] === "/" || letterArray[i] === "\\"
      || letterArray[i] === "{" || letterArray[i] === "}" || letterArray[i] === "|"
      || letterArray[i] === "-" || letterArray[i] === "_" || letterArray[i] === "+"
      || letterArray[i] === "<" || letterArray[i] === ">" || letterArray[i] === "~"
      || letterArray[i] === "`") {
      letterArray.splice(i, 1);
      i--;
    }
  }

  //console.log("letterArray:", letterArray);
  const wordArray = letterArray.join("").split(" ");
  //console.log("wordArray:", wordArray);
  let longestWord = "";
  for (let b = 0; b < wordArray.length; b++) {
    if (wordArray[b].length > longestWord.length) {
      longestWord = wordArray[b];
    }
  }
  //sen=longestWord;
  return longestWord;
  //return sen;

}

// keep this function call here
console.log(LongestWord(readline()));
