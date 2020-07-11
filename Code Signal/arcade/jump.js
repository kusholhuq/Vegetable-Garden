function avoidObstacles(inputArray) {
  const sortedArray = inputArray.sort();

  //ok now i got it
  // you have a given array of numbers
  //and you need to loop through that array, look at each one
  //and ask, is this divisible by 1 with no remainder?
  //if the answer is yes, then that means 1 will not work (no need to check all, if one of them break)
  //so you then say, is the number in the array divisible by 2 with no remainder,
  //if answer is no, go to next in array, once you get through the whole array with the answer no, you can return that number
  let done = false;
  let jump = 2;
  while (done === false) {
    for (let i = 0; i <= sortedArray.length; i++) {
      if (i === sortedArray.length) {
        return jump;
      }
      if (sortedArray[i] % jump === 0) {
        jump++;
        break;
      }
    }
  }
}
