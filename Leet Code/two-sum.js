/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //     //X put all numbers into an object
  //     //X the number is the property, and the value is the index
  //     //X loop through each property of object
  //     //ask does target minus this property exist in the object?
  //     //if it does exist,return the indeces of both
  //     //if not move on to the next one

  //     const numberObject = {};

  //     for(let i=0; i<nums.length; i++){
  //         numberObject[nums[i]]=i;
  //     }
  //     console.log(nums);
  //     console.log(numberObject);

  //     for(const property in numberObject){
  //         console.log("iteration", property)
  //         console.log("numberObject[target-property]", numberObject[target-property])
  //         if(numberObject[target-property]){
  //             if(numberObject[target-property]!==numberObject[property]){
  //             return [numberObject[property],numberObject[target-property]]
  //             }
  //         }
  //     }
  //     return [];

  //the above version does not account for duplicates so lets just try a nested loop
  for (let i = 0; i < nums.length - 1; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      let item = nums[i];
      let complement = target - item;
      if (nums[k] === complement) {
        return [i, k];
      }
    }
  }
};
