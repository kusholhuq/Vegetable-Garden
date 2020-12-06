/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //i need to look at each number in the array
  //and then look at it and the next number and their sum
  //compare that to my current max
  //if higher, new max
  //if lower, do not ammend max
  //then look at it, next, and next after that one
  //continue in this fashion
  //bad O(n^2) solution
  let max = nums[0];
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let b = i; b < nums.length; b++) {
      currentSum += nums[b];
      if (currentSum > max) {
        max = currentSum;
      }
    }
    currentSum = 0;
  }
  return max;
};
