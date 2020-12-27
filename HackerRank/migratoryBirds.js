function migratoryBirds(arr) {
  //find the number that occurs the most
  //if two numbers occur the most pick the smaller one

  //so we could create an object that stores the counts for each number
  //then loop through the object and pick the one with the highest value

  //then we can loop through one more time
  //and if any item has a count equal to the max count we add it to an array

  //then we sort the array and pick the smallest one

  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]]++;
    } else {
      counts[arr[i]] = 1;
    }
  }
  console.log(counts);

  let maxCount = 0;

  for (let property in counts) {
    if (counts[property] > maxCount) {
      maxCount = counts[property];
    }
  }
  console.log(maxCount);

  const highestNumbers = [];

  for (let item in counts) {
    if (counts[item] === maxCount) {
      highestNumbers.push(item);
    }
  }

  console.log(highestNumbers);
  highestNumbers.sort();
  return highestNumbers[0];

}
