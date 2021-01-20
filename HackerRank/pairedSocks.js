// Complete the sockMerchant function below.
function sockMerchant(n, ar) {

  //so we need to determine how many times a number appears
  //we need to determine how many pairs exist
  //so get the counts of each number
  //have a pair counter
  //if hte number is even, divide by 2
  //add to pair counter
  //if its not minus 1 and divide by 2
  //add to pair counter
  //return pair counter

  const numberInfo = {}

  for (let i = 0; i < ar.length; i++) {
    let arrayItem = ar[i];
    if (numberInfo[arrayItem]) {
      numberInfo[arrayItem]++;
    } else {
      numberInfo[arrayItem] = 1;
    }
  }

  let pairCounter = 0;

  for (let property in numberInfo) {
    let number = numberInfo[property];
    if (number === 0 || number === 1) {
      continue;
    }
    if (number % 2 === 0) {
      pairCounter = pairCounter + (number / 2);
    } else if (number % 2 !== 0) {
      pairCounter = pairCounter + ((number - 1) / 2);
    }
  }
  console.log(pairCounter)
  return pairCounter;
}
