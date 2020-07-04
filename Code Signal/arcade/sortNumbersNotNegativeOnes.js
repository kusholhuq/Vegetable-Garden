function sortByHeight(a) {
  //sort the numbers in an array, but leave -1s in place
  const trees = [];
  const numbers = [];
  for (let k = 0; k < a.length; k++) {
    if (a[k] !== -1) {
      numbers.push(a[k]);
    }
    if (a[k] === -1) {
      trees.push(k);
    }
  }
  var done = false;
  while (done === false) {
    done = true
    for (let h = 0; h < numbers.length; h++) {
      if (numbers[h - 1] > numbers[h]) {
        const temp = numbers[h];
        numbers[h] = numbers[h - 1];
        numbers[h - 1] = temp;
        done = false;
      }
    }
  }
  for (let u = 0; u < trees.length; u++) {
    numbers.splice(trees[u], 0, -1);
  }
  return numbers;

}
