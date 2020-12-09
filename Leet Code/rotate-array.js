/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //create a function to shift it to the right by 1 step
  //and then loop that k times


  //create a temp storage
  //loop from start to end of array
  //if you are on the last one do something
  //else do this
  //set temp to the next number
  //set next spot in array to current number

  //Xso k is the number of steps
  //Xif the number of steps is greater than the array length
  //Xsubtract the array length from the number of steps
  //Xdo this until the number of steps is less than the array length

  //then we use the number of steps to determine our copy margins
  //so we will copy from array length - k
  //until the end of the array
  //thats one piece

  //then we copy from the start until k
  //each time pushing to the resulting array

  //return resulting array

  while (k >= nums.length) {
    k -= nums.length;
  }
  if (k === 0) {
    return;
  }
  const result = [];
  for (let i = nums.length - k; i < nums.length; i++) {
    result.push(nums[i]);
  }
  console.log(result);
  for (let b = 0; b < nums.length - k; b++) {
    result.push(nums[b]);
  }
  console.log(result);
  console.log(result);

  for (let h = 0; h < nums.length; h++) {
    nums[h] = result[h];
  }
};
