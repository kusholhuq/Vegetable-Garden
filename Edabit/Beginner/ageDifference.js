function ageDifference(ages) {
  //find two largest numbers
  //then compare them

  //find the max number
  //remove it
  //find the max number
  //compare them
  //if same return "No age difference between spouses."
  //else return number + "years"

  let max = 0;
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] > max) {
      max = ages[i];
    }
  }
  for (let b = 0; b < ages.length; b++) {
    if (ages[b] === max) {
      ages.splice(b, 1);
      break;
    }
  }
  let max2 = 0;
  for (let k = 0; k < ages.length; k++) {
    if (ages[k] > max2) {
      max2 = ages[k];
    }
  }
  const difference = max - max2;
  if (difference === 0) {
    return "No age difference between spouses.";
  } else if (difference === 1) {
    return "1 year";
  }
  else {
    return difference + " years";
  }
}
