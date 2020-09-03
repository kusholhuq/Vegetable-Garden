function arrayPacking(a) {
  const binaryArray = [];
  for (let i = 0; i < a.length; i++) {
    binaryArray.push((a[i] >>> 0).toString(2));
  }
  console.log(binaryArray);
  for (let k = 0; k < binaryArray.length; k++) {
    if (binaryArray[k].length < 8) {
      while (binaryArray[k].length < 8) {
        binaryArray[k] = '0' + binaryArray[k];
      }
    }
  }
  console.log(binaryArray);
  let result = '';
  for (let b = binaryArray.length - 1; b >= 0; b--) {
    result += binaryArray[b];
  }
  console.log(result);
  return (parseInt(result, 2));
}
