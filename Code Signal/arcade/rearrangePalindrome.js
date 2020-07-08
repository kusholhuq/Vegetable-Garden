function palindromeRearranging(inputString) {
  //what words can be turned into palindromes
  //what are our criteria
  //if the length is even
  //all letters must have an even count
  //if the lenth is odd
  //1 letter can have an odd count
  //every other letter must have an even count

  const word = {};

  for (let k = 0; k < inputString.length; k++) {
    if (word[inputString[k]]) {
      word[inputString[k]]++;
    }
    if (!word[inputString[k]]) {
      word[inputString[k]] = 1;
    }
  }
  console.log(word);
  let evens = 0;
  let odds = 0;
  for (const j in word) {
    if (word[j] % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  console.log(evens, odds);

  if (inputString.length % 2 === 0) {
    if (odds !== 0) {
      return false;
    } else {
      return true;
    }
  }

  if (inputString.length % 2 !== 0) {
    if (odds !== 1) {
      return false;
    } else {
      return true;
    }
  }
  //we need to loop through the word object, and count how many odd and even letter counts exist

  //configs that return true
  //if length is even
  //all letter counts must be even
  // if(inputString.length%2===0){
  //     for(const prop in word){
  //         if(word[prop]%2!==0){
  //             return false;
  //         }
  //     }
  //     return true;
  // }
  // let presenceOfOdd=false;
  // if(inputString.length%2!==0){
  //     for(const prop2 in word){
  //         if(word[prop2]%2!==0){
  //             presenceOfOdd=true;
  //         }
  //     }
  //     if(presenceOfOdd===false){
  //         return false;
  //     } else{
  //         return true;
  //     }
  // }
  // //if length is odd
  // //1 letter count must be odd
  // //all else should be even
}
