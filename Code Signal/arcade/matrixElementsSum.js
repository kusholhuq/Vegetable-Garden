function matrixElementsSum(matrix) {

  var sum = 0;

  for (var i = 0; i < matrix.length; i++) {
    for (var k = 0; k < matrix[i].length; k++) {
      if (i === 0) {
        sum += matrix[i][k]
      }
      else {
        var ghost = false;
        for (var h = i - 1; h >= 0; h--) {
          if (matrix[h][k] === 0) {
            //do nothing
            ghost = true;
            break;
          }
        }
        if (ghost === false) {
          sum += matrix[i][k];
        }
      }
    }
  }
  return sum;

}

// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots(ie: add up all the values that don't appear below a 0).

// Example

// For

// matrix = [[0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3]]
