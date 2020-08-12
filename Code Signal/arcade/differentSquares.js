function differentSquares(matrix) {
  //can loop through each index, and push each 2*2 square into a list
  //then i can sort through that list and remove duplicates
  //how do i determine duplicates
  //convert each 2*2 into a string, and then make that string the name of a property in an object
  //then loop through the list of strings and see if it exists in the object, if it doesnt,
  //create the property, if it does, just add 1

  const stringArray = [];
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let b = 0; b < matrix[i].length - 1; b++) {
      let box = '';
      box += matrix[i][b] + '' + matrix[i][b + 1] + '' + matrix[i + 1][b + 1] + '' + matrix[i + 1][b];
      stringArray.push(box);
    }
  }

  console.log(stringArray);
  const hash = {};
  for (let k = 0; k < stringArray.length; k++) {
    if (!hash[stringArray[k]]) {
      hash[stringArray[k]] = 0;
    } else {
      hash[stringArray[k]]++;
    }
  }
  console.log(hash);
  let counter = 0;
  for (property in hash) {
    counter++;
  }
  return counter;
}
