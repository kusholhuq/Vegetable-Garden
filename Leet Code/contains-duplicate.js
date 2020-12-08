/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  //create an object that holdseach number as a property
  //the value of the properties will be the number of times the number is in the array
  //if any of the properties have value 2 or greater, return true
  //otherwise false

  //X create an empty object
  //X iterate through the array
  //X if the number doesn't exist in the object,
  //X create a property with value 1
  //X if the number does exist in the object
  //X plus 1 to the value
  //X loop through object
  //X check if any properties have value 2 or greater
  //X if yes return true
  //X return false

  //or just do a terrible nested loop, really easy code

  const numberCounts = {};

  for (let current = 0; current < nums.length; current++) {
    if (!numberCounts[nums[current]]) {
      numberCounts[nums[current]] = 1;
    } else if (numberCounts[nums[current]]) {
      numberCounts[nums[current]]++;
    }
  }

  console.log(numberCounts);

  for (property in numberCounts) {
    if (numberCounts[property] >= 2) {
      return true;
    }
  }

  return false;
};
