function arrayMaximalAdjacentDifference(inputArray) {
  //question is find the biggest difference between numbers next to each other
  //store the max difference
  //loop through every other

  let max = 0;

  for (let i = 1; i < inputArray.length; i++) {
    let difference = inputArray[i] - inputArray[i - 1];
    if (difference < 0) {
      difference = difference * -1;
    }
    if (difference > max) {
      max = difference;
    }
  }
  return max;
}
