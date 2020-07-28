function longestDigitsPrefix(inputString) {
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === '0' || inputString[i] === '1' || inputString[i] === '2' || inputString[i] === '3' || inputString[i] === '4' || inputString[i] === '5' || inputString[i] === '6' || inputString[i] === '7' || inputString[i] === '8' || inputString[i] === '9') {
      result += inputString[i];
    } else {
      return result;
    }
  }
  return result;
}
