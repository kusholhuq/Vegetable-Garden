function countApplesAndOranges(s, t, a, b, apples, oranges) {
  //find the number of apples and the number of oranges
  //that land between points s and t
  //given the array of distances thrown from a and b

  //loop through each array and find their final position
  //if their final position is within the range add them to the count

  let appleCount = 0;
  let orangeCount = 0;

  for (let i = 0; i < apples.length; i++) {
    let appleLanding = a + apples[i];
    if (appleLanding >= s && appleLanding <= t) {
      appleCount++;
    }
  }
  for (let k = 0; k < oranges.length; k++) {
    let orangeLanding = b + oranges[k];
    if (orangeLanding >= s && orangeLanding <= t) {
      orangeCount++;
    }
  }
  console.log(appleCount)
  console.log(orangeCount)
}
