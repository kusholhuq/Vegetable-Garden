function isMAC48Address(inputString) {
  //check that string length is correct
  //check that hiphens are in the right place
  //check all the characters are suitable
  //then return true
  const acceptable = {
    'A': 1,
    'B': 1,
    'C': 1,
    'D': 1,
    'E': 1,
    'F': 1,
    '0': 1,
    '1': 1,
    '2': 1,
    '3': 1,
    '4': 1,
    '5': 1,
    '6': 1,
    '7': 1,
    '8': 1,
    '9': 1,
    '-': 1
  }

  if (inputString.length !== 17) {
    console.log('length');
    return false;
  }
  if (inputString[2] !== '-' || inputString[5] !== '-' || inputString[8] !== '-' || inputString[11] !== '-' || inputString[14] !== '-') {
    console.log('hyphens')
    return false;
  }
  for (let i = 0; i < inputString.length; i++) {
    if (!acceptable[inputString[i]]) {
      console.log('loop at: ', i);
      return false;
    }
  }
  if (inputString[0] === '-' || inputString[1] === '-' || inputString[3] === '-' || inputString[4] === '-' || inputString[6] === '-' || inputString[7] === '-' || inputString[9] === '-' || inputString[10] === '-' || inputString[12] === '-' || inputString[13] === '-' || inputString[15] === '-' || inputString[16] === '-') {
    console.log('hyphens everywhere')
    return false;
  }
  return true;
}
