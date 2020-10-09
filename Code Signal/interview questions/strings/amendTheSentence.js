function amendTheSentence(s) {
  //make an array that locates all indexes at which an uppercase letter exists
  //loop through given string pushing the index to the array
  //then loop through array, splicing from index to index of the string
  //and push those peices to a words Array
  //then loop through words array and concat them to a string

  const indexes = [];
  const sArray = [];

  if (s[0] === 'A' || s[0] === 'B' || s[0] === 'C' || s[0] === 'D' || s[0] === 'E' || s[0] === 'F' || s[0] === 'G' || s[0] === 'H' || s[0] === 'I' || s[0] === 'J' || s[0] === 'K' || s[0] === 'L' || s[0] === 'M' || s[0] === 'N' || s[0] === 'O' || s[0] === 'P' || s[0] === 'Q' || s[0] === 'R' || s[0] === 'S' || s[0] === 'T' || s[0] === 'U' || s[0] === 'V' || s[0] === 'W' || s[0] === 'X' || s[0] === 'Y' || s[0] === 'Z') {
  } else {
    indexes.push(0);
  }


  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A' || s[i] === 'B' || s[i] === 'C' || s[i] === 'D' || s[i] === 'E' || s[i] === 'F' || s[i] === 'G' || s[i] === 'H' || s[i] === 'I' || s[i] === 'J' || s[i] === 'K' || s[i] === 'L' || s[i] === 'M' || s[i] === 'N' || s[i] === 'O' || s[i] === 'P' || s[i] === 'Q' || s[i] === 'R' || s[i] === 'S' || s[i] === 'T' || s[i] === 'U' || s[i] === 'V' || s[i] === 'W' || s[i] === 'X' || s[i] === 'Y' || s[i] === 'Z') {
      indexes.push(i);
    }
    sArray.push(s[i]);
  }
  console.log("Indexes: ", indexes);
  console.log("Array to String: ", sArray);
  const words = [];
  for (let b = 0; b < indexes.length; b++) {
    const word = sArray.slice(indexes[b], indexes[b + 1]);
    console.log("word:", word);
    words.push(word);
  }
  console.log("words: ", words);
  //do a nested loop
  let result = '';
  for (let p = 0; p < words.length; p++) {
    for (let l = 0; l < words[p].length; l++) {
      result += words[p][l];
    }
    if (p !== words.length - 1) {
      result += " ";
    }
  }
  const trueResult = result.toLowerCase();
  return trueResult;
}
