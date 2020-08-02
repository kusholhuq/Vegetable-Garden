function buildPalindrome(st) {
  //check if index 0 matches last index
  //if they dont match
  //you need to add the first index to the end
  //check if index 1 matches second to last index
  //if they dont match, splice it in there
  //start counting from 0 each time you change the string
  //if you can loop through the whole string with them matching, then you've built a palindrome,
  //and you can return that

  //describe a loop starting from 0, and goes until the end of the string, and iterates by 1
  //check if the first index matches the last index
  //if it does then iterate to the next character
  //if it does not then splice that character into that spot
  //here the indeces might get messed up because you are altering the string, so if you need to its ok to start the loop back from 0 just to be sure
  const charArray = [];
  for (let k = 0; k < st.length; k++) {
    charArray.push(st[k]);
  }
  console.log('charArray:', charArray);

  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === charArray[charArray.length - 1 - i]) {
      continue;
    }
    else if (charArray[i] !== charArray[charArray.length - 1 - i]) {
      charArray.splice(charArray.length - i, 0, charArray[i]);
      console.log('right after splice number:', i, charArray)
      i = 0;
    }
  }
  let resultString = '';
  for (let h = 0; h < charArray.length; h++) {
    resultString += charArray[h];
  }
  return resultString;
}

//this solution misunderstands the question, you are not allowed to splice, you can
//only add to the end of the string, so only passed 17/22 tests
