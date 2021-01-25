function checkMagazine(magazine, note) {
  //magazine is the pool
  //note is the word we want to construct

  //does the pool have the necessary words

  //create a pool object
  //so loop through the magazine array
  //add each word as a property with starting value 1

  //then loop through the note array
  //if it exists in the object reduce value by 1
  //if it doesnt exist return "no"

  //loop through pool
  //if any property has a negative valye return "no"

  //return yes

  const pool = {};
  for (let i = 0; i < magazine.length; i++) {
    let word = magazine[i];
    if (pool[word] !== undefined) {
      pool[word]++;
    } else {
      pool[word] = 1;
    }
  }
  //console.log(pool);

  for (let b = 0; b < note.length; b++) {
    let word = note[b];
    if (pool[word] !== undefined) {
      pool[word]--;
    } else {
      console.log("No");
      return "No";
    }
  }

  for (let property in pool) {
    if (pool[property] < 0) {
      console.log("No");
      return "No";
    }
  }

  console.log("Yes")
  return "Yes";
}
