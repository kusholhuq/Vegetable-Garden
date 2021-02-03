
function equalStacks(h1, h2, h3) {
  // Write your code here
  //create a variable that stores the sum total of each  stack
  //find the highest stack
  //pop the top value off
  //adjust the total
  //check if all are equal
  //if not pop from the highest stack
  //check if all are equal
  //continue
  //if any stack reaches 0 return false

  console.log(h1, h2, h3);
  const h1Flip = [];
  const h2Flip = [];
  const h3Flip = [];

  let h1Sum = 0;
  let h2Sum = 0;
  let h3Sum = 0;

  for (let i = 0; i < h1.length; i++) {
    h1Sum += h1[i];
  }
  for (let i = 0; i < h2.length; i++) {
    h2Sum += h2[i];
  }
  for (let i = 0; i < h3.length; i++) {
    h3Sum += h3[i];
  }
  console.log(h1Sum, h2Sum, h3Sum);

  while (true) {
    if (h1Sum === h2Sum && h1Sum === h3Sum) {
      return h1Sum;
    }
    if (h1Sum >= h2Sum && h1Sum >= h3Sum) {
      const amount = h1.shift();
      h1Sum -= amount;
      console.log("popped top off h1")
    } else if (h2Sum >= h1Sum && h2Sum >= h3Sum) {
      const amount = h2.shift();
      h2Sum -= amount;
      console.log("popped top off h2")
    } else if (h3Sum >= h1Sum && h3Sum >= h2Sum) {
      const amount = h3.shift();
      h3Sum -= amount;
      console.log("popped top off h3")
    }
    if (h1Sum === 0 || h2Sum === 0 || h3Sum === 0) {
      return 0;
    }
  }
}
