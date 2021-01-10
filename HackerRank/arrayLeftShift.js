function rotateLeft(d, arr) {
  // Write your code here
  //make a new array
  //loop from d to end of array
  //push each item onto new array
  //loop from start of array to d
  //push each item onto new array
  //return array
  while (d >= arr.length) {
    d = d - arr.length;
  }

  const result = [];
  for (let i = d; i < arr.length; i++) {
    result.push(arr[i]);
  }
  for (let b = 0; b < d; b++) {
    result.push(arr[b]);
  }
  console.log(result);
  return result;
}
