/*function notShare(arr1, arr2) {
  for (let i of arr1) {
    for (let j of arr2) {
      ifi (=== j) return false;
    }
  }
  return true;
}*/

function notShare(arr1, arr2) {
  for (let i of arr1) {
    if (arr2.includes(i)) {
      return false;
    }
  }
  return true;
}
