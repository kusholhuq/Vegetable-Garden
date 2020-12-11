function lonelyInteger(arr) {
  //create an object
  //see if opposite number exists in object
  //if not return that number
  console.log(arr);
  const integers = {};
  for (let b = 0; b < arr.length; b++) {
    if (integers[arr[b]]) {
      integers[arr[b]]++;
    } else if (!integers[arr[b]]) {
      integers[arr[b]] = 1;
    }
  }
  console.log(integers)
  for (const property in integers) {
    if (!integers[property * (-1)]) {
      return parseInt(property);
    }

  }
}
