function secondRightmostZeroBit(n) {
  return Math.pow(2, n.toString(2).split('').reverse().join("").split("0", 2).join("0").length);
}
//convert to binary
//look for 0, and then the next zero, starting from right end,
//find its position counting from 0
//then do 2 to the power of that position
