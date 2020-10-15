function adjacentElementsProduct(inputArray) {
  var result = -999;
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > result) {
      result = inputArray[i] * inputArray[i + 1];
    }
  }
  return result;
}


//Given an array of integers, find the pair of adjacent elements that has the
//largest product and return that product.
