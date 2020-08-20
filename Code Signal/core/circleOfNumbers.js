function circleOfNumbers(n, firstNumber) {
  let result = firstNumber + n / 2;
  if (result >= n) {
    return result - n;
  }
  return result;
}
