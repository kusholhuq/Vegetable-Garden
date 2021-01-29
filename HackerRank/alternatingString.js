// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  //take a string
  //and loop until you reach the end of the string
  //if you encounter two letters that are the same next to each other
  //increase deletecount
  let deleteCount = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      deleteCount++;
    }
  }
  console.log(deleteCount);
  return deleteCount;
}
