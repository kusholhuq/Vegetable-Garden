function deleteDigit(n) {
  //convert the number to something with an index, string or array
  //loop through and remove a number and then push it to an array
  //or just have a conditional and a variable

  let max = 0;
  const comparisonArray = [];
  const numberString = n + "";
  const numberArray = [];
  for (let i = 0; i < numberString.length; i++) {
    numberArray.push(parseInt(numberString[i]));
  }
  console.log(numberArray);
  //splice it out, compare it, splice it back in
  for (let k = 0; k < numberArray.length; k++) {
    const removed = numberArray.splice(k, 1);
    let innerNumberString = '';
    for (let b = 0; b < numberArray.length; b++) {
      innerNumberString += numberArray[b];
    }
    comparisonArray.push(innerNumberString);
    numberArray.splice(k, 0, removed);
  }

  console.log(numberArray);
  console.log(comparisonArray);
  console.log(comparisonArray.sort());
  return parseInt(comparisonArray[comparisonArray.length - 1]);
}
