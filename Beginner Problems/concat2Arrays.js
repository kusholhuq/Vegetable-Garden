function concat(arr1, arr2) {
  var result = [];
  while (arr1.length) {
    result.push(arr1.shift())
  }
  while (arr2.length) {
    result.push(arr2.shift())
  }
  return result;
}
