function alphabeticShift(inputString) {
  //given a string
  //shift each index forward one
  //so make a string of the entire alphabet
  //loop through the given string, comparing it to the alphabet string
  //when a match is found, add the next character in the alphabet to a resultant string
  let result = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < inputString.length; i++) {
    for (let k = 0; k < alphabet.length; k++) {
      if (alphabet[k] === inputString[i] && inputString[i] === 'z') {
        result += 'a';
        break;
      }
      if (alphabet[k] === inputString[i]) {
        result += alphabet[k + 1];
        break;
      }
    }
  }
  return result;
}
