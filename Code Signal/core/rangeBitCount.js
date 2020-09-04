function rangeBitCount(a, b) {
  //so loop throught he array and covert each one to binary
  //and add to a string
  //then loop through that string and count the 1s

  const atob = [];
  for (let i = a; i <= b; i++) {
    atob.push(i);
  }
  let arrayString = '';
  let binary = '';
  for (let k = 0; k < atob.length; k++) {
    arrayString += (atob[k].toString(2));

  }
  let oneCount = 0;
  for (let b = 0; b < arrayString.length; b++) {
    if (arrayString[b] === '1') {
      oneCount++;
    }
  }
  return oneCount;
}
