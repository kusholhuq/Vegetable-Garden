class SpiralMatrix {
  constructor(size) {
    this.row = 0;
    this.col = 0;
    this.counter = 1;
    this.size = size;
    this.directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    this.directionIndex = 0;
    this.matrix = [];

    for (let i = 0; i < this.size; i++) {
      this.matrix.push(new Array(this.size).fill(0));
    }
  }
  fill() {
    while (this.counter <= this.size ** 2) {
      let [dRow, dCol] = this.directions[this.directionIndex];
      let [nextRow, nextCol] = [this.row + dRow, this.col + dCol];

      if (this.matrix[this.row][this.col] === 0) {
        this.matrix[this.row][this.col] = this.counter;
        this.counter++;
      }
      if (this.checkNextCoord(nextRow, nextCol)) {
        this.row = nextRow;
        this.col = nextCol;
      } else {
        this.changeDirection()
      }
    }

  }
  checkNextCoord(nextRow, nextCol) {
    if (this.matrix[nextRow] !== undefined) {
      if (this.matrix[nextCol] !== undefined) {
        if (this.matrix[nextRow][nextCol] === 0) {
          return true;
        }
      }
    }
  }
  changeDirection() {
    this.directionIndex++;
    if (this.directionIndex === this.directions.length) this.directionIndex = 0;
  }
}


function spiralNumbers(n) {
  const spiral = new SpiralMatrix(n);
  spiral.fill();
  return spiral.matrix;
  // //have one variable, that tracks the layers
  // //meaning how far into the center you are going

  // //have another variable that tracks which row you should be on
  // //you should be able to

  // //layers are n-1
  // //3/2 has remainder of 1, means 1 column inside
  // //6/2 has no remainder, just 3 layers
  // //i just need how to loop through a layer
  // //and then have some variables that control the size of the layer
  // //do these 4 sides, and then go in a layer

  // //should push to an array n times
  // //after each push current number++
  // //then you create n-1 new arrays and push current number
  // //then unshift n-1 counts to the bottom array
  // //then unshift a number to n-2 arrays up
  // //there will need to be a conditional, that if n-2<=0, do nothing and move on
  // //then splice the current number n-2 times
  // let layers = Math.ceil(n/2);
  // console.log("layers",layers);
  // let currentNumber = 1;
  // const matrix = [];
  // // for(let g=0;g<layers;g++)
  // for(let i=0;i<n;i++){
  //     matrix.push([]);
  // }

  // for(let b=0;b<n;b++){
  //     matrix[0].push(currentNumber);
  //     currentNumber++;
  // }

  // for(let c=1;c<n;c++){
  //     matrix[c].push(currentNumber);
  //     currentNumber++;
  // }

  // for(let d=1;d<n;d++){
  //     matrix[n-1].unshift(currentNumber);
  //     currentNumber++;
  // }

  // for(let e=n-2;e>0;e--){
  //     matrix[e].unshift(currentNumber);
  //     currentNumber++;
  // }

  // for(let f=1; f<n-1;f++){
  //     matrix[1].splice(f,0,currentNumber);
  //     currentNumber++;
  // }

  // layers--;
  // let rotations=1;
  // while (layers){
  //     for(let g=rotations+1;g<n-rotations;g++){
  //         matrix[g].splice(rotations,0,currentNumber);
  //         currentNumber++;
  //     }
  //     //down

  //     if(layers>=2){
  //         for(let h=2;h<n-rotations;h++){
  //         matrix[n-rotations-1].splice(rotations,0,currentNumber);
  //         currentNumber++;
  //         //left
  //         }
  //         console.log(matrix);
  //         for(let j=n-rotations-2;j>rotations;j--){
  //             matrix[j].splice(rotations,0,currentNumber);
  //             currentNumber++;
  //         }//up
  //         console.log(matrix);
  //         for(let l=rotations+2+rotations; l<n;l++){
  //             matrix[rotations+1].splice(rotations+1,0, currentNumber);
  //             currentNumber++;
  //             //right
  //         }
  //         console.log(matrix);
  //     }
  //     layers--;
  //     rotations++;
  // }


  // //so this was one rotation
  // return matrix;
  // //how do we use this format for multiple rotations
  // //this is how you fill one layer, so we need a variable that controls the layers
  // // a new layer appears ever n+2
  // //total layers is equal to n/2 rounded up

  // //note, if n is odd, there will be a bullseye
  // //if n is even, no bullseye


}
