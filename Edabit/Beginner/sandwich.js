function hasSameBread(arr1, arr2) {
  if (arr1[0] !== arr2[0]) {
    return false;
  }
  if (arr1[2] !== arr2[2]) {
    return false;
  }
  return true;
}
