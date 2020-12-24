function birthdayCakeCandles(candles) {
  // Write your code here
  //loop through all numbers
  //find max
  //loop again and count how many times that max occurs

  let max = -10000;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
    }
  }
  let count = 0;
  for (let b = 0; b < candles.length; b++) {
    if (candles[b] === max) {
      count++;
    }
  }
  return count;
}
