// Complete the rotLeft function below.
function rotLeft(a, d) {
  //d is the number of rotations
  //you can just make a new array
  //loop from 0  + d until the end
  //and then from the beginning to 0 + d

  const result = [];
  for (let i = 0 + d; i < a.length; i++) {
    result.push(a[i]);
  }
  for (let b = 0; b < d; b++) {
    result.push(a[b]);
  }

  console.log(result);
  return result;
}
