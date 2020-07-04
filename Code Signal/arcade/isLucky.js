function isLucky(n) {
  //given a number with an even length
  //sum the first half
  //sum the second half
  //and compare to determine what should be returned
  //notes:
  //example: 0312
  //length 4
  //sum from index 0 to 1 (1 is (length/2)-1)
  //sum from index 2-3 (2 is (length/2) and 3 is length-1)
  //will have to convert to a string to get an index on each one, then convert back to number
  //when adding

  //pc
  //Xcreate a storage space for the sum of the first half
  //Xcreate a storage space for the sum of the second half
  //Xconvert the number to a string and store it
  //Xloop from the beginning to one before the halfway point of the string
  //Xin each iteration convert the string to a number and add it to the sum
  //Xloop from the halfway point until the end
  //Xin each iteration convert the string to a number and add it to the sum
  //If the sums are equal give back true
  //if the sums are not equal give false

  //code
  let firstHalf = 0;
  let secondHalf = 0;
  let numberString = n + '';
  for (let i = 0; i < (numberString.length / 2); i++) {
    firstHalf = firstHalf + parseInt(numberString[i]);
  }
  for (let k = (numberString.length / 2); k < numberString.length; k++) {
    secondHalf = secondHalf + parseInt(numberString[k]);
  }
  if (firstHalf === secondHalf) {
    return true;
  } else {
    return false;
  }
}
