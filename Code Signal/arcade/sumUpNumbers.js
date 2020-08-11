function sumUpNumbers(inputString) {
  let cleanString = '';
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === '0' || inputString[i] === '1' || inputString[i] === '2' || inputString[i] === '3' || inputString[i] === '4' || inputString[i] === '5' || inputString[i] === '6' || inputString[i] === '7' || inputString[i] === '8' || inputString[i] === '9') {
      cleanString += inputString[i];
    } else {
      cleanString += ' ';
    }
  }
  console.log(cleanString);
  console.log(cleanString.split(' '));
  const splitString = cleanString.split(' ');
  let sum = 0;
  for (let b = 0; b < splitString.length; b++) {
    if (splitString[b] !== '') {
      sum += parseInt(splitString[b]);
    }
  }
  return sum;
}
