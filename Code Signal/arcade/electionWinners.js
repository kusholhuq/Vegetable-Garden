function electionsWinners(votes, k) {
  //find the max
  //run through again, to see if there is a duplicate of the max, in that case, we must return 0
  //find who can exceed the max if k votes added to them
  //two passes

  //special case
  //k is equal to 0

  //where k=0, and there is a singular max, then you return 1


  let max = 0;
  let candidateCount = 0;
  //determine max
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > max) {
      max = votes[i];
    }
  }
  let maxCount = 0;
  //determine max count
  for (let b = 0; b < votes.length; b++) {
    if (votes[b] === max) {
      maxCount++;
    }
  }

  //special case return
  if (k === 0 && maxCount === 1) {
    return 1;
  }

  for (let g = 0; g < votes.length; g++) {
    if (votes[g] + k > max) {
      candidateCount++;
    }
  }
  return candidateCount;
}
