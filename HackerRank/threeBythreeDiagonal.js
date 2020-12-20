function diagonalDifference(arr) {
  // Write your code here
  const left = arr[0][0] + arr[1][1] + arr[2][2]
  const right = arr[0][2] + arr[1][1] + arr[2][0]
  const result = left - right;
  if (result < 0) {
    return result * (-1);
  }
  return result;
}
