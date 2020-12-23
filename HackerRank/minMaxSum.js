// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  //sort the array
  //sum the last 4
  //sum the first 4
  //return [first 4 sum, last 4 sum]
  arr.sort();
  const low = arr[0] + arr[1] + arr[2] + arr[3];
  const high = arr[4] + arr[1] + arr[2] + arr[3];
  console.log(low, high)

}
