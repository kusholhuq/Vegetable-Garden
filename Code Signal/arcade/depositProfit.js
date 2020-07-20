function depositProfit(deposit, rate, threshold) {
  let total = deposit;
  let done = false;
  let counter = 0;

  while (done === false) {
    if (total >= threshold) {
      return counter;
    } else if (total < threshold) {
      counter++;
      total = total + (total * (rate / 100));
    }
  }
}
