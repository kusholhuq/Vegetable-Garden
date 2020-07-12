function minesweeper(matrix) {
  //trues are bombs
  //falses are empty squares
  //in this iteration of the solution, bombs will show as 1
  //this is possibly a misinterpretation of the question, and bombs might actually be counting
  //how many bombs are near

  //given a matrix of booleans
  //return a matrix of counts of how many trues are around them,

  //loop through every index of the matrix,
  //at each one, count how many bombs are around them
  //and then push that to the array
  const result = [];
  for (let row = 0; row < matrix.length; row++) {
    const innerResult = [];
    for (let col = 0; col < matrix[row].length; col++) {
      let bombs = 0;
      if (matrix[row][col - 1]) {
        bombs++;
      }
      if (matrix[row][col + 1]) {
        bombs++;
      }
      if (matrix[row - 1]) {
        if (matrix[row - 1][col]) {
          bombs++;
        }

      }
      if (matrix[row + 1]) {
        if (matrix[row + 1][col]) {
          bombs++;
        }

      }
      if (matrix[row - 1]) {
        if (matrix[row - 1][col + 1]) {
          bombs++;
        }

      }
      if (matrix[row - 1]) {
        if (matrix[row - 1][col - 1]) {
          bombs++;
        }

      }
      if (matrix[row + 1]) {
        if (matrix[row + 1][col + 1]) {
          bombs++;
        }

      }
      if (matrix[row + 1]) {
        if (matrix[row + 1][col - 1]) {
          bombs++;
        }

      }
      innerResult.push(bombs);
    }
    result.push(innerResult);
  }
  return result;
}

// function minesweeper(matrix){
//     const result = []
//     for(var i = 0; i<matrix.length; i++){
//         const row = matrix[i];
//         const array = []
//         for(var j = 0; j<matrix[i].length; j++){
//             const elem = row[j];
//             var count = 0;

//             // find bombs arround element
//             for(var x = -1; x<=1; x++){
//                 for(var y = -1; y<=1; y++){
//                     if(x === 0 && y===0){
//                         continue;
//                     }
//                     if(x + j <0 || x+j >=row.length){
//                         continue
//                     }
//                     if(y + i < 0 || y + i >= matrix.length){
//                         continue;
//                     }


//                         if(matrix[i+y][j+x]){
//                             count++;
//                         }


//                 }
//             }
//             array.push(count)
//         }
//         result.push(array)
//     }
//     console.log('did i finish');
//     return result;
// }
