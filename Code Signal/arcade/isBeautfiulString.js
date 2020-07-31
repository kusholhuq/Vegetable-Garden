function isBeautifulString(inputString) {
  //loop through the given input string
  //and create a count of every letter that appears

  //then find out which letters are 1 before the letters
  //convert string to an array
  //sort it
  //then make a hashmap of the sorted array with counts
  //then make an array of the counts and check that it is descending

  const inputArray = [];
  for (let i = 0; i < inputString.length; i++) {
    inputArray.push(inputString[i]);
  }
  inputArray.sort();
  const hash = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0
  };
  for (let k = 0; k < inputArray.length; k++) {
    if (hash[inputArray[k]]) {
      hash[inputArray[k]]++
    }
    if (!hash[inputArray[k]]) {
      hash[inputArray[k]] = 1;
    }

  }
  const countArray = [];
  for (const property in hash) {
    countArray.push(hash[property]);
  }
  console.log(countArray);
  console.log(inputArray);
  console.log(hash);
  for (let j = 0; j < countArray.length - 1; j++) {
    if (countArray[j] < countArray[j + 1]) {
      return false
    }
  }

  return true


}
