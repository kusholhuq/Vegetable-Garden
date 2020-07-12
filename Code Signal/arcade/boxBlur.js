function boxBlur(image) {
  //given some matrix
  //return a matrix(array of arrays) that represents
  //the average value of all exteriors of 3x3 matrices inside given matrix

  //how do you identify X?
  // what is the criteria?
  // must have a number above, below, left and right
  //up and down is i+1, i-1
  //how do you check that, left and right are like j-1 and j+1 in the context of a loop
  //could loop through every index, checking if each number meets the above criteria
  //and then fire a conditional when criteria is met
  //conditional would include taking average of surrounding border numbers
  //store that average, and push onto our result array, as an array
  //few exceptions, loop starts from second row, and only goes until right before length -1


  //a nested loop
  //first loop uses variable i
  //second loop uses variable j

  //if i =0 do not look at
  //if i = image.length-1 do not look at
  //if j=0 do not look at
  //if j=image[i].length-1 do not look at

  //but what i really mean is
  //first loop goes from let i=1 until i<image.length-1
  //second loop goes from let j=1 until j<image[i].length-1

  //in example 6 and 2 spit out 5 and 4, and they appear in same inner array in output
  //so the inner loop must push an array onto our result array

  //const result =[]
  //outerloop{
  //const innerResult = [];
  //innerloop{

  //do some shit
  //push thing onto inner result

  //}

  //push innerResult to result

  //}
  const result = [];
  for (let i = 1; i < image.length - 1; i++) {
    const innerResult = [];
    for (let j = 1; j < image[i].length - 1; j++) {
      let sum = 0;
      let average = 0;
      let left = image[i][j - 1];
      let right = image[i][j + 1];
      let top = image[i - 1][j];
      let bottom = image[i + 1][j];
      let topRight = image[i - 1][j + 1];
      let topLeft = image[i - 1][j - 1];
      let bottomRight = image[i + 1][j + 1];
      let bottomLeft = image[i + 1][j - 1];
      let self = image[i][j];
      sum = left + right + top + bottom + topRight + topLeft + bottomRight + bottomLeft + self;
      average = Math.floor(sum / 9);
      innerResult.push(average);
    }
    result.push(innerResult);
  }
  return result;
  // const matrix = []

  //     for(var i = 1; i<image.length - 1; i++){
  //         const array = [];
  //         for(var j = 1; j < image[i].length - 1; j++){
  //             //average pixels arround "x"
  //             let sum = 0;
  //             sum+= image[i+1][j];
  //             sum+= image[i-1][j];
  //             sum+= image[i+1][j+1];
  //             sum+= image[i-1][j+1];
  //             sum+= image[i+1][j-1];
  //             sum+= image[i-1][j-1];
  //             sum+= image[i][j+1];
  //             sum+= image[i][j-1];
  //             array.push(Math.floor(sum/8));
  //         }
  //         matrix.push(array);
  //     }
  //     return matrix;
}
