function absoluteValuesSumMinimization(a) {
  //find the number closest to every other number in array
  //possibly the smallest number
  //or you can just loop through the array and do the sum for each one. and compare
  let lowestSum = null;
  let lowestSumNumber = null;

  for (let i = 0; i < a.length; i++) {
    let thisTotal = null;
    for (let k = 0; k < a.length; k++) {
      thisTotal += Math.abs(a[k] - a[i]);
    }
    if (lowestSum === null) {
      lowestSum = thisTotal;
      lowestSumNumber = a[i];
    }
    if (thisTotal < lowestSum) {
      lowestSum = thisTotal;
      lowestSumNumber = a[i];
    }
  }
  return lowestSumNumber;
}
