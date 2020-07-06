function areSimilar(a, b) {
  //create a storage to remember how many are different
  //loop through both arrays and compare them at each index
  //if they are different, add 1 to the different counter
  //return true if different counter is less than or equal to 2
  //return false if different counter is greater than 2
  // let sum1=0;
  // let sum2=0;

  // if(sum1!==sum2){
  //     return false;
  // }
  // if(counter>2){
  //     return false
  // } else {
  //     return true;
  // }

  //what if instead
  //I turn one into an object
  //then i loop through b, and see if that number exists in the hash table
  //if it does not add one to contentCounter
  //after loop completes, if contentCounter is greater than 0,
  //return false
  //if its 0, you can continue to the loop test we did before
  //remove the sum test

  let contentCounter = 0;
  const hash = {};
  for (let k = 0; k < a.length; k++) {
    hash[a[k]] = 1;
  }
  for (let h = 0; h < b.length; h++) {
    if (!hash[b[h]]) {
      contentCounter++;
    }
  }
  if (contentCounter !== 0) {
    return false;
  }

  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    // sum1+=a[i];
    // sum2+=b[i];
    if (a[i] !== b[i]) {
      counter++;
    }
  }
  if (counter > 2) {
    return false
  } else {
    return true;
  }


}
