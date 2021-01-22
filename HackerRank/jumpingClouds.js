function jumpingOnClouds(c) {
  //start at 0
  //start a jump counter,increment with each jump
  //see if you can jump twice
  //      if you can jump twice
  //      jump twice and add 2 to current index
  //if jumping twice lands you on a storm cloud
  //jump once

  let jumpCounter = 0;
  let currentIndex = 0;
  while (currentIndex < c.length - 1) {
    if (c[currentIndex + 2] !== 1) {
      currentIndex += 2;
      jumpCounter++;
    } else if (c[currentIndex + 1] !== 1) {
      currentIndex++;
      jumpCounter++;
    }
  }
  return jumpCounter;
  console.log(c)
  console.log(c.length)

}
