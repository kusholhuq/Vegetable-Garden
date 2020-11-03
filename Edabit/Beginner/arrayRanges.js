function canNest(arr1, arr2) {
  const arr1Min = Math.min(...arr1);
  const arr1Max = Math.max(...arr1);
  const arr2Min = Math.min(...arr2);
  const arr2Max = Math.max(...arr2);
  console.log(arr1Min);
  if (arr1Min > arr2Min && arr1Max < arr2Max) {
    return true;
  } else {
    return false;
  }
}
