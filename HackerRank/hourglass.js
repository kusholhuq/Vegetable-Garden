// Complete the hourglassSum function below.
function hourglassSum(arr) {
  //loop through the range where hourglasses exist
  //sum the hourglass shape
  //push into an array
  //find the highest value

  //the four by four that we count is defined by
  //index 1 to 4 inside each array
  //row 0 to 3

  //hour glass pieces

  const result = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 1; col < 5; col++) {
      let topLeft = arr[row][col - 1];
      let topMid = arr[row][col];
      let topRight = arr[row][col + 1];
      let middle = arr[row + 1][col];
      let bottomLeft = arr[row + 2][col - 1];
      let bottomMid = arr[row + 2][col];
      let bottomRight = arr[row + 2][col + 1];
      const hourglass = topLeft + topMid + topRight + middle + bottomLeft + bottomMid + bottomRight;
      result.push(hourglass);
    }
  }
  let max = -10000;
  for (let i = 0; i < result.length; i++) {
    if (result[i] > max) {
      max = result[i];
    }
  }
  return max;


}
