function evenDigitsOnly(n) {
  //convert to string
  //loop through
  //if any is odd, return false
  //after loop ends, return true

  let numberString = n + "";
  for (let i = 0; i < numberString.length; i++) {
    if (parseInt(numberString[i]) % 2 !== 0) {
      return false;
    }
  }
  return true;
}
